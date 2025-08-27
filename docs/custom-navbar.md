# Chỉnh sửa navbar - navbar

## HTML

Nếu bạn muốn chỉnh sửa thanh điều hướng (navbar), bạn có thể tạo một thanh điều hướng dựa trên HTML.

!> Lưu ý rằng các đường dẫn tài liệu bắt đầu bằng `#/`.

```html
<!-- index.html -->

<body>
    <nav>
        <a href="#/">English</a>
        <a href="#/vie-vn/">Tiếng Việt</a>
    </nav>
    <div id="app"></div>
</body>
```

## Markdown

Bạn có thể tạo một thanh điều hướng bằng cách cấu hình thuộc tính `loadNavbar` là **true** và tạo một tệp có tên `_navbar.md`, tham khảo cấu hình loadNavbar.

```html
<!-- index.html -->

<script>
    window.$docsify = {
        loadNavbar: true
    }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
```

```markdown
<!-- _navbar.md -->

* [English](/)
* [Vietnamese](/vi-vn/)
```

!> Bạn cần tạo một tệp có tên `.nojenkyll` trong thư mục `./docs` để tắt chức năng bỏ qua của GitHub với các tệp bắt đầu bằng dấu gạch dưới.

`sidebar.md` sẽ được tải theo từng cấp độ thư mục. Nếu thư mục đó không có `_sidebar.md`, nó sẽ tìm các tệp tương tự ở các cấp độ trên trong cây thư mục.

## Lồng cấp

Bạn có thể tạo các danh sách con bằng cách thụt lề các mục nằm dưới một mục cha nhất định.

```markdown
<!-- _navbar.md -->

* Bắt đầu

        * [Khởi động nhanh](quickstart.md)
        * [Viết thêm trang](more-pages.md)
        * [Tùy chỉnh thanh điều hướng](custom-navbar.md)
        * [Trang bìa](cover.md)

* Cấu hình
        * [Cấu hình](configuration.md)
        * [Giao diện](themes.md)
        * [Sử dụng plugin](plugins.md)
        * [Cấu hình Markdown](markdown.md)
        * [Tô sáng ngôn ngữ](language-highlight.md)
```

hiển thị như

![Lồng cấp navbar](_images/nested-navbar.png 'Lồng cấp navbar')

## Kết hợp thanh điều hướng tùy chỉnh với plugin emoji

Nếu bạn sử dụng [plugin emoji](plugins#emoji):

```html
<!-- index.html -->

<script>
    window.$docsify = {
        // ...
    }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/emoji.min.js"></script>
```

bạn có thể, ví dụ, sử dụng emoji cờ trong tệp Markdown thanh điều hướng tùy chỉnh:

```markdown
<!-- _navbar.md -->

* [:us:, :uk:](/)
* [:cn:](/zh-cn/)
```