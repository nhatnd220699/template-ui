# Cấu hình

Bạn có thể cấu hình Docsify bằng cách định nghĩa `window.$docsify` như một object:

```html
<script>
  window.$docsify = {
    repo: 'docsifyjs/docsify',
    maxLevel: 3,
    coverpage: true,
  };
</script>
```

Cấu hình cũng có thể được định nghĩa như một hàm, trong trường hợp này tham số đầu tiên là instance `vm` của Docsify. Hàm này phải trả về một object cấu hình. Điều này có thể hữu ích khi tham chiếu `vm` ở những nơi như cấu hình markdown:

```html
<script>
  window.$docsify = function (vm) {
    return {
      markdown: {
        renderer: {
          code(code, lang) {
            // ... sử dụng `vm` ...
          },
        },
      },
    };
  };
</script>
```

## alias

- Kiểu: `Object`

Đặt bí danh cho route. Bạn có thể tự do quản lý các quy tắc định tuyến. Hỗ trợ RegExp.
Lưu ý rằng thứ tự quan trọng! Nếu một route có thể khớp với nhiều bí danh, bí danh bạn khai báo đầu tiên sẽ được ưu tiên.

```js
window.$docsify = {
  alias: {
    '/foo/(.*)': '/bar/$1', // hỗ trợ regexp
    '/zh-cn/changelog': '/changelog',
    '/changelog':
      'https://raw.githubusercontent.com/docsifyjs/docsify/master/CHANGELOG',
    '/.*/_sidebar.md': '/_sidebar.md', // Xem #301
  },
};
```

## auto2top

- Kiểu: `Boolean`
- Mặc định: `false`

Cuộn lên đầu màn hình khi route thay đổi.

```js
window.$docsify = {
  auto2top: true,
};
```

## autoHeader

- Kiểu: `Boolean`
- Mặc định: `false`

Nếu `loadSidebar` và `autoHeader` đều được bật, với mỗi liên kết trong `_sidebar.md`, thêm một header vào trang trước khi chuyển đổi thành HTML. Xem [#78](https://github.com/docsifyjs/docsify/issues/78).

```js
window.$docsify = {
  loadSidebar: true,
  autoHeader: true,
};
```

## basePath

- Kiểu: `String`

Đường dẫn cơ sở của website. Bạn có thể đặt nó thành một thư mục khác hoặc một tên miền khác.

```js
window.$docsify = {
  basePath: '/path/',

  // Tải files từ một site khác
  basePath: 'https://docsify.js.org/',

  // Thậm chí có thể tải files từ repo khác
  basePath:
    'https://raw.githubusercontent.com/ryanmcdermott/clean-code-javascript/master/',
};
```

## catchPluginErrors

- Kiểu: `Boolean`
- Mặc định: `true`

Xác định xem Docsify có nên xử lý các lỗi plugin _đồng bộ_ không được bắt một cách tự động hay không. Điều này có thể ngăn các lỗi plugin ảnh hưởng đến khả năng render nội dung site trực tiếp của docsify.

## cornerExternalLinkTarget

- Kiểu: `String`
- Mặc định: `'_blank'`

Target để mở liên kết ngoài ở góc trên bên phải. Mặc định `'_blank'` (cửa sổ/tab mới)

```js
window.$docsify = {
  cornerExternalLinkTarget: '_self', // mặc định: '_blank'
};
```

## coverpage

- Kiểu: `Boolean|String|String[]|Object`
- Mặc định: `false`

Kích hoạt [tính năng cover](cover.md). Nếu true, nó sẽ tải từ `_coverpage.md`.

```js
window.$docsify = {
  coverpage: true,

  // Tên file tùy chỉnh
  coverpage: 'cover.md',

  // nhiều covers
  coverpage: ['/', '/zh-cn/'],

  // nhiều covers và tên file tùy chỉnh
  coverpage: {
    '/': 'cover.md',
    '/zh-cn/': 'cover.md',
  },
};
```

## el

- Kiểu: `String`
- Mặc định: `'#app'`

Phần tử DOM được mount khi khởi tạo. Có thể là một chuỗi CSS selector hoặc một [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) thực tế.

```js
window.$docsify = {
  el: '#app',
};
```

## executeScript

- Kiểu: `Boolean`
- Mặc định: `null`

Thực thi script trên trang. Chỉ phân tích thẻ script đầu tiên ([demo](themes)). Nếu phát hiện Vue, mặc định là `true`.

```js
window.$docsify = {
  executeScript: true,
};
```

```markdown
## Đây là test

<script>
  console.log(2333)
</script>
```

Lưu ý rằng nếu bạn đang chạy một script ngoài, ví dụ như một demo jsfiddle nhúng, hãy đảm bảo bao gồm plugin [external-script](plugins.md?id=external-script).

## ext

- Kiểu: `String`
- Mặc định: `'.md'`

Phần mở rộng file yêu cầu.

```js
window.$docsify = {
  ext: '.md',
};
```

## externalLinkRel

- Kiểu: `String`
- Mặc định: `'noopener'`

Mặc định `'noopener'` (no opener) ngăn trang ngoài mới mở (khi [externalLinkTarget](#externallinktarget) là `'_blank'`) có khả năng kiểm soát trang của chúng ta. Không có `rel` được đặt khi nó không phải `'_blank'`. Xem [bài đăng này](https://mathiasbynens.github.io/rel-noopener/) để biết thêm thông tin về lý do bạn có thể muốn sử dụng tùy chọn này.

```js
window.$docsify = {
  externalLinkRel: '', // mặc định: 'noopener'
};
```

## externalLinkTarget

- Kiểu: `String`
- Mặc định: `'_blank'`

Target để mở các liên kết ngoài bên trong markdown. Mặc định `'_blank'` (cửa sổ/tab mới)

```js
window.$docsify = {
  externalLinkTarget: '_self', // mặc định: '_blank'
};
```

## fallbackLanguages

- Kiểu: `Array<string>`

Danh sách các ngôn ngữ sẽ fallback về ngôn ngữ mặc định khi một trang được yêu cầu và nó không tồn tại cho locale đã cho.

Ví dụ:

- thử fetch trang `/de/overview`. Nếu trang này tồn tại, nó sẽ được hiển thị.
- sau đó thử fetch trang mặc định `/overview` (tùy thuộc vào ngôn ngữ mặc định). Nếu trang này tồn tại, nó sẽ được hiển thị.
- sau đó hiển thị trang 404.

```js
window.$docsify = {
  fallbackLanguages: ['fr', 'de'],
};
```

## formatUpdated

- Kiểu: `String|Function`

Chúng ta có thể hiển thị ngày cập nhật file thông qua biến **{docsify-updated<span>}</span>**. Và định dạng nó bằng `formatUpdated`.
Xem https://github.com/lukeed/tinydate#patterns

```js
window.$docsify = {
  formatUpdated: '{MM}/{DD} {HH}:{mm}',

  formatUpdated: function (time) {
    // ...

    return time;
  },
};
```

## hideSidebar

- Kiểu : `Boolean`
- Mặc định: `true`

Tùy chọn này sẽ ẩn hoàn toàn sidebar của bạn và sẽ không render bất kỳ nội dung nào ở bên cạnh.

```js
window.$docsify = {
  hideSidebar: true,
};
```

## homepage

- Kiểu: `String`
- Mặc định: `'README.md'`

`README.md` trong thư mục docs của bạn sẽ được coi là trang chủ cho website của bạn, nhưng đôi khi bạn có thể cần serve một file khác làm trang chủ.

```js
window.$docsify = {
  // Thay đổi thành /home.md
  homepage: 'home.md',

  // Hoặc sử dụng readme trong repo của bạn
  homepage:
    'https://raw.githubusercontent.com/docsifyjs/docsify/master/README.md',
};
```

## loadNavbar

- Kiểu: `Boolean|String`
- Mặc định: `false`

Tải navbar từ file Markdown `_navbar.md` nếu **true**, ngược lại tải nó từ đường dẫn được chỉ định.

```js
window.$docsify = {
  // tải từ _navbar.md
  loadNavbar: true,

  // tải từ nav.md
  loadNavbar: 'nav.md',
};
```

## loadSidebar

- Kiểu: `Boolean|String`
- Mặc định: `false`

Tải sidebar từ file Markdown `_sidebar.md` nếu **true**, ngược lại tải nó từ đường dẫn được chỉ định.

```js
window.$docsify = {
  // tải từ _sidebar.md
  loadSidebar: true,

  // tải từ summary.md
  loadSidebar: 'summary.md',
};
```

## logo

- Kiểu: `String`

Logo website như nó xuất hiện trong sidebar. Bạn có thể thay đổi kích thước bằng CSS.

```js
window.$docsify = {
  logo: '/_media/icon.svg',
};
```

## markdown

- Kiểu: `Function`

Xem [cấu hình Markdown](markdown.md).

```js
window.$docsify = {
  // object
  markdown: {
    smartypants: true,
    renderer: {
      link: function () {
        // ...
      },
    },
  },

  // function
  markdown: function (marked, renderer) {
    // ...
    return marked;
  },
};
```

## maxLevel

- Kiểu: `Number`
- Mặc định: `6`

Cấp độ tối đa của Mục lục (Table of content).

```js
window.$docsify = {
  maxLevel: 4,
};
```

## mergeNavbar

- Kiểu: `Boolean`
- Mặc định: `false`

Navbar sẽ được hợp nhất với sidebar trên các màn hình nhỏ hơn.

```js
window.$docsify = {
  mergeNavbar: true,
};
```

## name

- Kiểu: `String`

Tên website như nó xuất hiện trong sidebar.

```js
window.$docsify = {
  name: 'docsify',
};
```

Trường name cũng có thể chứa HTML tùy chỉnh để dễ dàng tùy chỉnh hơn:

```js
window.$docsify = {
  name: '<span>docsify</span>',
};
```

## nameLink

- Kiểu: `String`
- Mặc định: `'window.location.pathname'`

URL mà `name` của website liên kết đến.

```js
window.$docsify = {
  nameLink: '/',

  // Cho mỗi route
  nameLink: {
    '/zh-cn/': '#/zh-cn/',
    '/': '#/',
  },
};
```

## nativeEmoji

- Kiểu: `Boolean`
- Mặc định: `false`

Render các mã shorthand emoji bằng hình ảnh emoji kiểu GitHub hoặc ký tự emoji gốc của platform.

```js
window.$docsify = {
  nativeEmoji: true,
};
```

```markdown
:smile:
:partying_face:
:joy:
:+1:
:-1:
```

Hình ảnh kiểu GitHub khi `false`:

<output data-lang="output">
  <img class="emoji" src="https://github.githubassets.com/images/icons/emoji/unicode/1f604.png" alt="smile">
  <img class="emoji" src="https://github.githubassets.com/images/icons/emoji/unicode/1f973.png" alt="partying_face">
  <img class="emoji" src="https://github.githubassets.com/images/icons/emoji/unicode/1f602.png" alt="joy">
  <img class="emoji" src="https://github.githubassets.com/images/icons/emoji/unicode/1f44d.png" alt="+1">
  <img class="emoji" src="https://github.githubassets.com/images/icons/emoji/unicode/1f44e.png" alt="-1">
</output>

Ký tự gốc của platform khi `true`:

<output data-lang="output">
  <span class="emoji">😄︎</span>
  <span class="emoji">🥳︎</span>
  <span class="emoji">😂︎</span>
  <span class="emoji">👍︎</span>
  <span class="emoji">👎︎</span>
</output>

Để render các mã shorthand như text, thay thế ký tự `:` bằng HTML entity `&colon;`.

```markdown
&colon;100&colon;
```

<output data-lang="output">

&colon;100&colon;

</output>

## noCompileLinks

- Kiểu: `Array<string>`

Đôi khi chúng ta không muốn docsify xử lý các liên kết của chúng ta. Xem [#203](https://github.com/docsifyjs/docsify/issues/203). Chúng ta có thể bỏ qua việc compile các liên kết nhất định bằng cách chỉ định một mảng các chuỗi. Mỗi chuỗi được chuyển đổi thành một biểu thức chính quy (`RegExp`) và _toàn bộ_ href của một liên kết được khớp với nó.

```js
window.$docsify = {
  noCompileLinks: ['/foo', '/bar/.*'],
};
```

## noEmoji

- Kiểu: `Boolean`
- Mặc định: `false`

Vô hiệu hóa phân tích emoji và render tất cả shorthand emoji như text.

```js
window.$docsify = {
  noEmoji: true,
};
```

```markdown
:100:
```

<output data-lang="output">

&colon;100&colon;

</output>

Để vô hiệu hóa phân tích emoji của các mã shorthand riêng lẻ, thay thế ký tự `:` bằng HTML entity `&colon;`.

```markdown
:100:

&colon;100&colon;
```

<output data-lang="output">

:100:

&colon;100&colon;

</output>

## notFoundPage

- Kiểu: `Boolean` | `String` | `Object`
- Mặc định: `false`

Hiển thị thông báo "404 - Not found" mặc định:

```js
window.$docsify = {
  notFoundPage: false,
};
```

Tải file `_404.md`:

```js
window.$docsify = {
  notFoundPage: true,
};
```

Tải đường dẫn tùy chỉnh của trang 404:

```js
window.$docsify = {
  notFoundPage: 'my404.md',
};
```

Tải trang 404 đúng theo localization:

```js
window.$docsify = {
  notFoundPage: {
    '/': '_404.md',
    '/de': 'de/_404.md',
  },
};
```

> Lưu ý: Các tùy chọn cho fallbackLanguages không hoạt động với các tùy chọn `notFoundPage`.

## onlyCover

- Kiểu: `Boolean`
- Mặc định: `false`

Chỉ coverpage được tải khi truy cập trang chủ.

```js
window.$docsify = {
  onlyCover: false,
};
```

## relativePath

- Kiểu: `Boolean`
- Mặc định: `false`

Nếu **true**, các liên kết có liên quan đến context hiện tại.

Ví dụ, cấu trúc thư mục như sau:

```text
.
└── docs
    ├── README.md
    ├── guide.md
    └── zh-cn
        ├── README.md
        ├── guide.md
        └── config
            └── example.md
```

Với relative path **được bật** và URL hiện tại `http://domain.com/zh-cn/README`, các liên kết đã cho sẽ resolve thành:

```text
guide.md              => http://domain.com/zh-cn/guide
config/example.md     => http://domain.com/zh-cn/config/example
../README.md          => http://domain.com/README
/README.md            => http://domain.com/README
```

```js
window.$docsify = {
  // Relative path được bật
  relativePath: true,

  // Relative path bị vô hiệu hóa (giá trị mặc định)
  relativePath: false,
};
```

## repo

- Kiểu: `String`

Cấu hình URL repository, hoặc một chuỗi `username/repo`, để thêm widget [GitHub Corner](http://tholman.com/github-corners/) ở góc trên bên phải của site.

```js
window.$docsify = {
  repo: 'docsifyjs/docsify',
  // hoặc
  repo: 'https://github.com/docsifyjs/docsify/',
};
```

## requestHeaders

- Kiểu: `Object`

Đặt headers của request resource.

```js
window.$docsify = {
  requestHeaders: {
    'x-token': 'xxx',
  },
};
```

Chẳng hạn như thiết lập cache

```js
window.$docsify = {
  requestHeaders: {
    'cache-control': 'max-age=600',
  },
};
```

## routerMode

- Kiểu: `String`
- Mặc định: `'hash'`

```js
window.$docsify = {
  routerMode: 'history', // mặc định: 'hash'
};
```

## routes

- Kiểu: `Object`

Định nghĩa các route "ảo" có thể cung cấp nội dung một cách động. Một route là một ánh xạ giữa đường dẫn mong đợi, đến một chuỗi hoặc một hàm. Nếu giá trị được ánh xạ là một chuỗi, nó được coi như markdown và được phân tích tương ứng. Nếu nó là một hàm, nó được mong đợi trả về nội dung markdown.

Một hàm route nhận tối đa ba tham số:

1. `route` - đường dẫn của route được yêu cầu (ví dụ `/bar/baz`)
2. `matched` - [`RegExpMatchArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) được khớp bởi route (ví dụ với `/bar/(.+)`, bạn nhận được `['/bar/baz', 'baz']`)
3. `next` - đây là một callback bạn có thể gọi khi hàm route của bạn là async

Lưu ý rằng thứ tự quan trọng! Các route được khớp theo thứ tự bạn khai báo chúng, có nghĩa là trong trường hợp bạn có các route chồng chéo, bạn có thể muốn liệt kê những route cụ thể hơn trước.

```js
window.$docsify = {
  routes: {
    // Khớp cơ bản với return string
    '/foo': '# Custom Markdown',

    // Khớp RegEx với hàm đồng bộ
    '/bar/(.*)': function (route, matched) {
      return '# Custom Markdown';
    },

    // Khớp RegEx với hàm bất đồng bộ
    '/baz/(.*)': function (route, matched, next) {
      // Yêu cầu polyfill `fetch` cho các trình duyệt legacy (https://github.github.io/fetch/)
      fetch('/api/users?id=12345')
        .then(function (response) {
          next('# Custom Markdown');
        })
        .catch(function (err) {
          // Xử lý lỗi...
        });
    },
  },
};
```

Ngoài strings, các hàm route có thể trả về một giá trị falsy (`null` \ `undefined`) để chỉ ra rằng chúng bỏ qua request hiện tại:

```js
window.$docsify = {
  routes: {
    // chấp nhận mọi thứ ngoài dogs (đồng bộ)
    '/pets/(.+)': function(route, matched) {
      if (matched[0] === 'dogs') {
        return null;
      } else {
        return 'I like all pets but dogs';
      }
    }

    // chấp nhận mọi thứ ngoài cats (bất đồng bộ)
    '/pets/(.*)': function(route, matched, next) {
      if (matched[0] === 'cats') {
        next();
      } else {
        // Async task(s)...
        next('I like all pets but cats');
      }
    }
  }
}
```

Cuối cùng, nếu bạn có một đường dẫn cụ thể có file markdown thực (và do đó không nên được khớp bởi route của bạn), bạn có thể opt nó ra bằng cách trả về một giá trị `false` rõ ràng:

```js
window.$docsify = {
  routes: {
    // nếu bạn tra cứu /pets/cats, docsify sẽ bỏ qua tất cả routes và tìm "pets/cats.md"
    '/pets/cats': function(route, matched) {
      return false;
    }

    // nhưng bất kỳ pet nào khác nên tạo nội dung động ngay tại đây
    '/pets/(.+)': function(route, matched) {
      const pet = matched[0];
      return `your pet is ${pet} (but not a cat)`;
    }
  }
}
```

## subMaxLevel

- Kiểu: `Number`
- Mặc định: `0`

Thêm mục lục (TOC) trong sidebar tùy chỉnh.

```js
window.$docsify = {
  subMaxLevel: 2,
};
```

Nếu bạn có một liên kết đến trang chủ trong sidebar và muốn nó được hiển thị là active khi truy cập root url, hãy đảm bảo cập nhật sidebar của bạn tương ứng:

```markdown
- Sidebar
  - [Trang chủ](/)
  - [Trang khác](another.md)
```

Để biết thêm chi tiết, xem [#1131](https://github.com/docsifyjs/docsify/issues/1131).

## themeColor

- Kiểu: `String`

Tùy chỉnh màu theme. Sử dụng tính năng [CSS3 variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) và polyfill trong các trình duyệt cũ.

```js
window.$docsify = {
  themeColor: '#3F51B5',
};
```

## topMargin

- Kiểu: `Number`
- Mặc định: `0`

Thêm khoảng trống ở trên khi cuộn trang nội dung để đạt đến section được chọn. Điều này hữu ích trong trường hợp bạn có layout _sticky-header_ và bạn muốn căn chỉnh các anchor đến cuối header của bạn.

```js
window.$docsify = {
  topMargin: 90, // mặc định: 0
};
```

## vueComponents

- Kiểu: `Object`

Tạo và đăng ký các [Vue components](https://vuejs.org/v2/guide/components.html) global. Các components được chỉ định sử dụng tên component làm key với một object chứa các tùy chọn Vue làm value. Component `data` là duy nhất cho mỗi instance và sẽ không persist khi users điều hướng site.

```js
window.$docsify = {
  vueComponents: {
    'button-counter': {
      template: `
        <button @click="count += 1">
          Bạn đã click {{ count }} lần
        </button>
      `,
      data() {
        return {
          count: 0,
        };
      },
    },
  },
};
```

```markdown
<button-counter></button-counter>
```

<output data-lang="output">
  <button-counter></button-counter>
</output>

## vueGlobalOptions

- Kiểu: `Object`

Chỉ định [các tùy chọn Vue](https://vuejs.org/v2/api/#Options-Data) để sử dụng với nội dung Vue không được mount rõ ràng với [vueMounts](#mounting-dom-elements), [vueComponents](#components), hoặc một [markdown script](#markdown-script). Các thay đổi đối với `data` global sẽ persist và được phản ánh ở bất cứ đâu các tham chiếu global được sử dụng.

```js
window.$docsify = {
  vueGlobalOptions: {
    data() {
      return {
        count: 0,
      };
    },
  },
};
```

```markdown
<p>
  <button @click="count -= 1">-</button>
  {{ count }}
  <button @click="count += 1">+</button>
</p>
```

<output data-lang="output">
  <p>
    <button @click="count -= 1">-</button>
    {{ count }}
    <button @click="count += 1">+</button>
  </p>
</output>

## vueMounts

- Kiểu: `Object`

Chỉ định các phần tử DOM để mount như [Vue instances](https://vuejs.org/v2/guide/instance.html) và các tùy chọn liên quan của chúng. Các phần tử mount được chỉ định sử dụng [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) làm key với một object chứa các tùy chọn Vue làm value của chúng. Docsify sẽ mount phần tử khớp đầu tiên trong khu vực nội dung chính mỗi khi một trang mới được tải. Mount element `data` là duy nhất cho mỗi instance và sẽ không persist khi users điều hướng site.

```js
window.$docsify = {
  vueMounts: {
    '#counter': {
      data() {
        return {
          count: 0,
        };
      },
    },
  },
};
```

```markdown
<div id="counter">
  <button @click="count -= 1">-</button>
  {{ count }}
  <button @click="count += 1">+</button>
</div>
```

<output id="counter">
  <button @click="count -= 1">-</button>
  {{ count }}
  <button @click="count += 1">+</button>
</output>