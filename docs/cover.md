# Trang bìa

Kích hoạt tính năng trang bìa bằng cách đặt `coverpage` thành **true**. Xem [cấu hình coverpage](configuration.md#coverpage).

## Sử dụng cơ bản

Đặt `coverpage` thành **true**, và tạo một file `_coverpage.md`:

```html
<!-- index.html -->

<script>
    window.$docsify = {
        coverpage: true
    }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
```

```markdown
<!-- _coverpage.md -->

![logo](_media/icon.svg)

# docsify <small>3.5</small>

> Trình tạo trang tài liệu kỳ diệu.

- Đơn giản và nhẹ
- Không cần tạo file html tĩnh
- Nhiều giao diện

[GitHub](https://github.com/docsifyjs/docsify/)
[Bắt đầu](#docsify)
```

## Tùy chỉnh nền

Màu nền được tạo ngẫu nhiên theo mặc định. Bạn có thể tùy chỉnh màu nền hoặc hình nền:

```markdown
<!-- _coverpage.md -->

# docsify <small>3.5</small>

[GitHub](https://github.com/docsifyjs/docsify/)
[Bắt đầu](#quick-start)

<!-- hình nền -->

![](_media/bg.png)

<!-- màu nền -->

![color](#f0f0f0)
```

## Trang bìa làm trang chủ

Thông thường, trang bìa và trang chủ sẽ xuất hiện cùng lúc. Tất nhiên, bạn cũng có thể tách riêng trang bìa bằng tùy chọn [onlyCover](configuration.md#onlycover).

## Nhiều trang bìa

Nếu trang tài liệu của bạn có nhiều ngôn ngữ, bạn có thể thiết lập nhiều trang bìa.

Ví dụ, cấu trúc tài liệu của bạn như sau

```text
.
└── docs
        ├── README.md
        ├── guide.md
        ├── _coverpage.md
        └── zh-cn
                ├── README.md
                └── guide.md
                └── _coverpage.md
```

Bây giờ, bạn có thể thiết lập

```js
window.$docsify = {
    coverpage: ['/', '/zh-cn/']
};
```

Hoặc đặt tên file đặc biệt

```js
window.$docsify = {
    coverpage: {
        '/': 'cover.md',
        '/zh-cn/': 'cover.md'
    }
};
```