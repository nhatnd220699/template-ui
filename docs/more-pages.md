## Tạo trang tài liệu mới

Để có thể thêm trang mới cho tài liệu của bạn, hãy tạo thêm một file markdown mới trong thư mục `./docs`. Ví dụ:

```text
.
└── docs
    ├── README.md
    ├── guide.md
    └── zh-cn
        ├── README.md
        └── guide.md
```

Nó sẽ tương ứng với các đường dẫn sau

```text
docs/README.md        => http://domain.com
docs/guide.md         => http://domain.com/#/guide
docs/zh-cn/README.md  => http://domain.com/#/zh-cn/
docs/zh-cn/guide.md   => http://domain.com/#/zh-cn/guide
```
## Thanh bên

Để có một thanh bên, bạn phải tạo tệp `_sidebar.md`, xem chi tiết tại đây.

Sau đó bạn phải đặt thuộc tính `loadSidebar` bằng **true**, chi tiết tại đây.

```html
<!-- index.html -->

<script>
  window.$docsify = {
    loadSidebar: true
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
```

Ví dụ với nội dung tệp `_sidebar.md` như sau:

```markdown
<!-- docs/_sidebar.md -->

* [Home](/)
* [Guide](guide.md)
```
Bạn cần tạo một tệp có tên `.nojenkyll` trong thư mục `./docs` để  tắ t chức năng ignore của GitHub với các tệp bắt đầu bằng dấu gạch dưới

!> Docsify mặc định sử dụng `_sidebar.md` trong thư mục cùng cấp với địa chỉ URL. Nếu không tìm thấy nó sẽ sử dụng `_sidebar.md` ở thư mục cấp một.


## Các thanh bên lồng nhau.

Thanh bên có thể thay đổi sau khi bạn duyệt qua các nút trong cây thư mục, với nút bạn muốn thay đổi, chỉ cần thêm tệp `_sidebar.md` vào trong thư mục chứa nút đó.

`sidebar.md` được tải theo từng cấp độ thư mục. Nếu thư mục đó không có `_sidebar.md`, nó sẽ tìm các tệp tương tự ở các cấp độ trên trong cây thư mục. 


Bạn có thể sử  dụng `alias` để tránh các trường hợp tự động tìm kiếm `_sidebar.md`. không mong muốn.

```html
<script>
  window.$docsify = {
    loadSidebar: true,
    alias: {
      '/.*/_sidebar.md': '/_sidebar.md'
    }
  }
</script>
```

!> Bạn có thể  chỉ sử dụng tệp `REAdME.md` để làm landing page.

## Đặt tên cho các trang tài liệu từ thanh bên.

Page's `title` của các trang hiển thị được lấy giống tên của _mục đang chọn_ được đặt tại `thanh bên`. Để tối ưu hóa SEO, bạn có thể tùy chỉnh title bằng cách cung cấp thêm chuỗi ký tự sau tên tệp.

```markdown
<!-- docs/_sidebar.md -->
* [Home](/)
* [Guide](guide.md "The greatest guide in the world")
```

## Mục lục

Các trường trong `thanh bên - sidebar` được tạo từ file markdown `_sidebar.md`. Để có thể tùy chỉnh cấp độ lồng nhau. Bạn có thể sửa thuộc tính `subMaxLevel` trong cấu hình ban đầu:

```html
<!-- index.html -->

<script>
  window.$docsify = {
    loadSidebar: true,
    subMaxLevel: 2
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
```
## Bỏ qua các tiêu đề 

Khi `subMaxLevel` được cấu hình, các tiêu đề trong tệp markdown sẽ được tự động thêm vào thành các mục trong `thanh bên - sidebar`. Nếu bạn không muốn tiêu đề trong tệp hiển thị lên thanh bên, hãy sử dụng `<!-- docsify-ignore -->` như sau:

```markdown
# Bắt đầu làm quen

## Tiêu đề <!-- docsify-ignore -->

Tiêu đề trên sẽ không hiển thị trên thanh bên của ứng dụng.
```

Để  có thể bỏ qua tất cả các tiêu đề trong tệp chỉ định, `docsify` cung cấp cho bạn cú pháp `<!-- {docsify-ignore-all} -->` với điều kiện là bạn đặt nó tại tiêu đề đầu tiên của trang markdown.


```markdown
# Bắt đầu làm quen <!-- {docsify-ignore-all} -->

## Tiêu đề

Tiêu đề trên sẽ không hiển thị trên thanh bên của ứng dụng.
```
Các thẻ `<!-- docsify-ignore -->` và `<!-- {docsify-ignore-all} -->` sẽ tự động được ẩn đi khi kết xuất tài liệu.


