class DataSync {
  constructor(axiosInstance, options = {}) {
    if (!axiosInstance?.request) throw new Error('❌ Invalid axios instance');

    this.http = axiosInstance;
    this._config = {
      loadingThreshold: 600,
      responseDataPath: ['data', 'result'],
      errorCheckers: [
        (res) => res.status >= 400,
        (res, data) => data?.code && data.code !== 'SUCCESS',
        (res, data) => data?.result === false
      ],
      messageField: 'message',
      defaultCache: false,
      ...options
    };

    this._dataCache = new Map();
    this._paramCache = new Map();
    this._pendingRequests = 0;
    this._messages = { error: null, success: null };
    this.endpoints = {};
    this._loadingHooks = { onQueueAdd: null, onQueueEmpty: null };
    this.interceptors = { before: null, after: null };

    this._dataPicker = (res) =>
      this._config.responseDataPath.reduce((acc, path) => acc?.[path], res) ?? res;
    this._errorHandler = (res, data) => {
      for (const check of this._config.errorCheckers)
        if (check(res, data)) throw new Error(data[this._config.messageField] || 'Request failed');
    };
  }
  /**
   * Tạo một instance mới của DataSync.
   *
   * @param {import('axios').AxiosInstance} http - Axios instance đã cấu hình sẵn.
   * @param {Object} [_config={}] - Cấu hình tùy chọn cho DataSync.
   * @param {number} [_config.loadingThreshold=600] - Thời gian chờ (ms) trước khi gọi hook loading.
   * @param {string[]} [_config.responseDataPath=['data','result']] - Đường dẫn đến payload thực trong response.
   * @param {Array<function>} [_config.errorCheckers] - Mảng hàm kiểm tra lỗi (nhận `(response, data)`).
   * @param {string} [_config.messageField='message'] - Trường chứa thông báo trong response.
   * @param {boolean} [_config.defaultCache=false] - Bật cache mặc định cho các GET endpoint đăng ký.
   * @returns {DataSync} Instance DataSync mới.
   */
  static create(http, config = {}) { return new DataSync(http, config); }
  hasError() { return !!this._messages.error; }
  getData(key) { return this._dataCache.get(key); }
  getMsgError() { return this._messages.error[this._config.messageField] ?? this._messages.error?.message ?? null;}
  getMsgSuccess() { return this._messages.success; }
  clearCache(key) { this._dataCache.delete(key); this._paramCache.delete(key); return this; }
  clearAllCache() { this._dataCache.clear(); this._paramCache.clear(); return this; }
  clearMsg() { this._messages = { error: null, success: null }; return this; }

  setLoadingHooks({ onQueueAdd, onQueueEmpty }) {
    this._loadingHooks = { onQueueAdd, onQueueEmpty }; return this;
  }
  setResponseOperator({ dataPicker, errorHandler }) {
    if (dataPicker) this._dataPicker = dataPicker;
    if (errorHandler) this._errorHandler = errorHandler;
    return this;
  }

  _sameParams(endpoint, params) {
    return this._paramCache.has(endpoint) &&
           JSON.stringify(this._paramCache.get(endpoint)) === JSON.stringify(params);
  }

  _buildUrl(url, params = {}) {
    let builtUrl = url, queryParams = { ...params };
    (url.match(/:(\w+)/g) || []).forEach(match => {
      const name = match.slice(1);
      if (queryParams[name] !== undefined) {
        builtUrl = builtUrl.replace(match, queryParams[name]);
        delete queryParams[name];
      }
    });
    return { builtUrl, queryParams };
  }

  async _executeRequest(requestFn, endpoint, params, useCache) {
    this._messages = { error: null, success: null };
    if (useCache && params && this._sameParams(endpoint, params))
      return this._dataCache.get(endpoint);
    if (useCache && params) this._paramCache.set(endpoint, params);

    const loadingId = setTimeout(() => {
      this._pendingRequests++; 
      this._loadingHooks.onQueueAdd && this._loadingHooks.onQueueAdd();
    }, this._config.loadingThreshold);


    try {
      const response = await requestFn();
      clearTimeout(loadingId);

      this.interceptors.after && this.interceptors.after(response.data);

      this._errorHandler(response, response.data);
      
      const data = this._dataPicker(response.data);
      this._dataCache.set(endpoint, data);

      if (response.data[this._config.messageField]) {
        this._messages.success = response.data[this._config.messageField];
      }

      return data;
    } catch (error) {
      this._messages.error = error.response?.data || error;
      console.error('DataSync:', error);

      return null;
    } finally {
      if (this._pendingRequests > 0) this._pendingRequests--;

      if (this._pendingRequests === 0) {
          this._loadingHooks.onQueueEmpty && this._loadingHooks.onQueueEmpty();
      }
    }
  }

  _registerEndpoint(method, name, url, useCache = false) {
    this.endpoints[name] = async (bodyOrParams, maybeParams) => {
      const isBodyMethod = ['post', 'put', 'patch'].includes(method);
      const body = isBodyMethod ? bodyOrParams : null;
      const params = isBodyMethod ? maybeParams : bodyOrParams;

      return this._executeRequest(async () => {
        const config = { params: {} };
        this.interceptors.before &&
          await this.interceptors.before({ body, params, config, type: method.toUpperCase() });

        const { builtUrl, queryParams } = this._buildUrl(url, params);
        config.params = queryParams;
        if (body instanceof FormData)
          config.headers = { ...config.headers, 'Content-Type': 'multipart/form-data' };

        return this.http[method](builtUrl, body, config);
      }, name, useCache ? Object.values(params || {}) : false, useCache);
    };
    return this;
  }

  registerGet(name,url,opts={}) { return this._registerEndpoint('get', name, url, opts.cache ?? this._config.defaultCache); }
  registerPost(name,url) { return this._registerEndpoint('post', name, url); }
  registerPatch(name,url) { return this._registerEndpoint('patch', name, url); }
  registerPut(name,url) { return this._registerEndpoint('put', name, url); }
  registerDelete(name,url) { return this._registerEndpoint('delete', name, url); }
}

export default DataSync;