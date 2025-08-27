# Danh sách Plugin

## Tìm kiếm toàn văn

Mặc định, siêu liên kết trên trang hiện tại được nhận diện và nội dung được lưu trong `localStorage`. Bạn cũng có thể chỉ định đường dẫn đến các tập tin.

<!-- prettier-ignore -->
```html
<script>
  window.$docsify = {
    search: 'auto', // mặc định

    search: [
      '/',            // => /README.md
      '/guide',       // => /guide.md
      '/get-started', // => /get-started.md
      '/zh-cn/',      // => /zh-cn/README.md
    ],

    // các tham số cấu hình đầy đủ
    search: {
      maxAge: 86400000, // Thời gian hết hạn, mặc định một ngày
      paths: [], // hoặc 'auto'
      placeholder: 'Nhập để tìm kiếm',

      // Bản địa hóa
      placeholder: {
        '/zh-cn/': '搜索',
        '/': 'Nhập để tìm kiếm',
      },

      noData: 'Không có kết quả!',

      // Bản địa hóa
      noData: {
        '/zh-cn/': '找不到结果',
        '/': 'Không có kết quả',
      },

      // Độ sâu tiêu đề, 1 - 6
      depth: 2,

      hideOtherSidebarContent: false, // có ẩn nội dung thanh bên khác hay không

      // Để tránh xung đột chỉ mục tìm kiếm
      // giữa nhiều website dưới cùng một domain
      namespace: 'website-1',

      // Sử dụng các chỉ mục khác nhau cho tiền tố đường dẫn (namespace).
      // LƯU Ý: Chỉ hoạt động trong chế độ 'auto'.
      //
      // Khi khởi tạo chỉ mục, chúng ta tìm đường dẫn đầu tiên từ thanh bên.
      // Nếu nó khớp với tiền tố từ danh sách, chúng ta chuyển sang chỉ mục tương ứng.
      pathNamespaces: ['/zh-cn', '/ru-ru', '/ru-ru/v1'],

      // Bạn có thể cung cấp một regexp để khớp tiền tố. Trong trường hợp này,
      // chuỗi con khớp sẽ được sử dụng để xác định chỉ mục
      pathNamespaces: /^(\/(zh-cn|ru-ru))?(\/(v1|v2))?/,
    },
  };
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/search.min.js"></script>
```

Plugin này bỏ qua các dấu phụ khi thực hiện tìm kiếm toàn văn (ví dụ, "cafe" cũng sẽ khớp với "café"). Các trình duyệt cũ như IE11 yêu cầu polyfill [String.normalize()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) sau để bỏ qua các dấu phụ:

```html
<script src="//polyfill.io/v3/polyfill.min.js?features=String.prototype.normalize"></script>
```

## Google Analytics

Cài đặt plugin và cấu hình track id.

```html
<script>
  window.$docsify = {
    ga: 'UA-XXXXX-Y',
  };
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/ga.min.js"></script>
```

Cấu hình bằng `data-ga`.

<!-- prettier-ignore -->
```html
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js" data-ga="UA-XXXXX-Y"></script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/ga.min.js"></script>
```

## Emoji

Hiển thị một bộ sưu tập lớn hơn các mã tắt emoji. Không có plugin này, Docsify chỉ có thể hiển thị một số lượng hạn chế các mã tắt emoji.

!> Không được khuyến khích sử dụng từ v4.13. Docsify không còn yêu cầu plugin này để hỗ trợ emoji đầy đủ.

```html
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/emoji.min.js"></script>
```

## Script Bên ngoài

Nếu script trên trang là một script bên ngoài (import tập tin js qua thuộc tính `src`), bạn sẽ cần plugin này để làm cho nó hoạt động.

```html
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/external-script.min.js"></script>
```

## Phóng to hình ảnh

Phóng to hình ảnh như Medium. Dựa trên [medium-zoom](https://github.com/francoischalifour/medium-zoom).

```html
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js"></script>
```

Loại trừ hình ảnh đặc biệt

```markdown
![](image.png ':no-zoom')
```

## Chỉnh sửa trên github

Thêm nút `Chỉnh sửa trên github` trên mỗi trang. Được cung cấp bởi [@njleonzhang](https://github.com/njleonzhang), xem [tài liệu](https://github.com/njleonzhang/docsify-edit-on-github) này

## Demo code với xem trước tức thì và tích hợp jsfiddle

Với plugin này, mã mẫu có thể được hiển thị trên trang ngay lập tức, để người đọc có thể xem bản xem trước ngay lập tức.
Khi người đọc mở rộng hộp demo, mã nguồn và mô tả sẽ được hiển thị ở đó. Nếu họ nhấp vào nút `Thử trong Jsfiddle`,
`jsfiddle.net` sẽ được mở với mã của mẫu này, cho phép người đọc sửa đổi mã và tự thử nghiệm.

Cả [Vue](https://njleonzhang.github.io/docsify-demo-box-vue/) và [React](https://njleonzhang.github.io/docsify-demo-box-react/) đều được hỗ trợ.

## Sao chép vào Clipboard

Thêm một nút `Nhấp để sao chép` đơn giản vào tất cả các khối mã được định dạng trước để dễ dàng cho phép người dùng sao chép mã mẫu từ tài liệu của bạn. Được cung cấp bởi [@jperasmus](https://github.com/jperasmus)

```html
<script src="//cdn.jsdelivr.net/npm/docsify-copy-code/dist/docsify-copy-code.min.js"></script>
```

Xem [tại đây](https://github.com/jperasmus/docsify-copy-code/blob/master/README.md) để biết thêm chi tiết.

## Disqus

Bình luận Disqus. https://disqus.com/

```html
<script>
  window.$docsify = {
    disqus: 'shortname',
  };
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/disqus.min.js"></script>
```

## Gitalk

[Gitalk](https://github.com/gitalk/gitalk) là một thành phần bình luận hiện đại dựa trên Github Issue và Preact.

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/gitalk/dist/gitalk.css" />

<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/gitalk.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/gitalk/dist/gitalk.min.js"></script>
<script>
  const gitalk = new Gitalk({
    clientID: 'Github Application Client ID',
    clientSecret: 'Github Application Client Secret',
    repo: 'Github repo',
    owner: 'Github repo owner',
    admin: [
      'Các cộng tác viên Github repo, chỉ những người này mới có thể khởi tạo github issues',
    ],
    // chế độ không bị phân tâm giống facebook
    distractionFreeMode: false,
  });
</script>
```

## Phân trang

Phân trang cho docsify. Bởi [@imyelo](https://github.com/imyelo)

```html
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify-pagination/dist/docsify-pagination.min.js"></script>
```

Nhấp [vào đây](https://github.com/imyelo/docsify-pagination#readme) để có thêm thông tin.

## Tabs

Một plugin docsify.js để hiển thị nội dung có tab từ markdown.

- [Tài liệu & Demo](https://jhildenbiddle.github.io/docsify-tabs)

Được cung cấp bởi [@jhildenbiddle](https://github.com/jhildenbiddle/docsify-tabs).

## Thêm plugin

Xem [awesome-docsify](awesome?id=plugins)