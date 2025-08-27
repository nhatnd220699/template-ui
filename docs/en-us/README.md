# Làm quen

Chúng tôi khuyên bạn nên sử dụng `docsify-cli` toàn cục, công cụ preview và initializing tài liệu tự động.

```bash
npm i docsify-cli -g
```

## Khởi tạo

Nếu bạn muốn khởi tạo tài liệu trong thư mục `./docs`, bạn có thể sử dụng `init` command.

```bash
docsify init ./docs
```

## Viết nội dung

Sau khi chạy xong `init` command, bạn có thể thấy một số file được tạo tự động trong thư mục `./docs`.

- `index.html` là file chính (entry file - đầu vào)
- `README.md` là trang chủ
- `.nojekyll` ngăn không cho JekyLL bỏ qua các tệp bắt đầu bằng gạch dưới.

Bạn có thể dễ dàng cập nhập tài liệu trong `./docs/README.md`, hoặc bạn có thể tạo các trang tài liệu mới.

## Chế độ xem trước

Sử dụng câu lệnh `docsify serve` để có thể xem bản preview tại địa chỉ `http://localhost:3000` trên trình duyệt.

```bash
docsify serve docs
```

?> Xem thêm các trường hợp sử dụng `docsify-cli` tại tài liệu docsify-cli.

## Cài đặt thủ công

Nếu bạn không sử dụng `npm`, bạn có thể tự tạo thủ công. Bắt đầu bằng tạo một tệp `index.html`:

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="description" content="Description">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">
</head>
<body>
  <div id="app"></div>
  <script>
    window.$docsify = {
      name: '',
      repo: ''
    }
  </script>
  <!-- Docsify v4 -->
  <script src="//cdn.jsdelivr.net/npm/docsify@4"></script>
</body>
</html>
```

### Lưu ý về phiên bản của docsify

?>Lưu ý rằng trong cả hai ví dụ dưới đây, URL của docsify sẽ cần được cập nhập thủ công khi một phiên bản chính thức mới của docsify được phát hành (ví dụ: `v4.x.x` => `v5.x.x`). Hãy kiểm tra trang web chính thức của docsify định kỳ để xem liệu có phiên bản chính mới nào được phát hành hay chưa.

Chỉ định phiên bản lớn trong URL (@4) sẽ tự động cập nhập các phiên bản nhỏ và các bản vá lỗi. Đây là cách khuyến nghị để tải tài nguyên của docsify.

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/themes/vue.css" />
<script src="//cdn.jsdelivr.net/npm/docsify@4"></script>
```

Nếu bạn không muốn tự động cập nhập các phiên bản nhỏ, bạn có thể chỉ định phiên bản một cách cụ thể như sau:

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4.11.4/themes/vue.css"/>
<script src="//cdn.jsdelivr.net/npm/docsify@4.11.4"></script>
```

### Xem trước thủ công

Nếu bạn có Python đã được cài trong hệ điều hành, bạn có thể sử dụng nó để chạy preview

```python2
cd docs && python -m SimpleHTTPServer 3000
```

```python3
cd docs && python -m http.server 3000
```

## Hiển thị trạng thái đang tải tài liệu

Nếu bạn muốn, bạn có thể hiển thị trạng thái đang tải như sau:

```html
<!-- index.html -->

<div id="app">Please wait...</div>
```

Bạn phải thêm `data-app` attribute nếu bạn thay đổi `el`:

```html
<!-- index.html -->

<div data-app id="main">Please wait...</div>

<script>
  window.$docsify = {
    el: '#main',
  };
</script>
```

Nếu bạn có thắc mắc về cấu hình `el`, xem tại đây.