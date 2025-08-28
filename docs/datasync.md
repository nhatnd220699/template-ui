# Datasync service

## Khởi tạo 
Sử dụng DataSync.create(AxiosInstance, Config): DataSyncInstance

```javascript
const api = DataSync.create({
    loadingThreshold: 600, // Thời gian chờ (ms) trước khi gọi hook loading.
    responseDataPath: ['data', 'result'] // Đường dẫn đến dữ liệu trong interface standard của response.
    errorCheckers: [], // Mảng hàm kiểm tra lỗi 
    messageField: 'message' // Trường chứa thông báo trong response
    defaultCache: false, // Chế độ cache cho các GET endpoint đăng ký.
})
```

## Method

1. `api.hasError(): boolean`: Sử dụng sau khi gọi tới endpoint đã đăng ký để kiểm tra xem có thành công hay thất bại
2. `api.getData(): any`:  Sử dụng để lấy dữ liệu từ api trả về
3. `api.getMsgSuccess(): string | null`: Sử dụng để lấy thông báo thành công từ phía máy chủ
4. `api.getMsgError(): string | null`: Sử dụng để lấy thông báo thất bại từ phía máy chủ
5. `api.setLoadingHooks({onQueueAdd(): void, onQueueEmpty(): void}): DataSync`: Cấu hình các sự kiện khi bắt đầu gọi api và khi các api đang gọi kết thúc.
6. `api.setResponseOperator({dataPicker(rawData): any, errorHandler(axiosData, rawData)})`
7. `api.clearCache(key: string)`: Xóa dữ liệu cache theo api chỉ định
8. `api.clearAllCache(key: string)`: Xóa dữ liệu cache tất cả api
9. `api.clearMsg`: Xóa hết thông báo
10. `api.registerGet(name: string, url: string)`: Đăng ký GET endpoint
11. `api.registerPost(name: string, url: string)`: Đăng ký POST endpoint
12. `api.registerPatch(name: string, url: string)`: Đăng ký PATCH endpoint
13. `api.registerPut(name: string, url: string)`: Đăng ký PUT endpoint
14. `api.registerDelete(name: string, url: string)`: Đăng ký DELETE endpoint