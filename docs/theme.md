# Themes

Có một số lượng themes có sẵn, bao gồm cả themes chính thức và do cộng đồng tạo ra. Sao chép theme tùy chỉnh từ trang web [Vue](//vuejs.org) và [buble](//buble.surge.sh) cùng với đóng góp từ [@liril-net](https://github.com/liril-net) cho theme phong cách màu đen.

<!-- prettier-ignore-start -->
```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/vue.css" />
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/buble.css" />
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/dark.css" />
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/pure.css" />
```
<!-- prettier-ignore-end -->

!> Các file đã nén có sẵn trong `/lib/themes/`.

<!-- prettier-ignore-start -->
```html
<!-- compressed -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/lib/themes/vue.css" />
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/lib/themes/buble.css" />
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/lib/themes/dark.css" />
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/lib/themes/pure.css" />
```
<!-- prettier-ignore-end -->

Nếu bạn có ý tưởng hoặc muốn phát triển một theme mới, chúng tôi hoan nghênh bạn gửi [pull request](https://github.com/docsifyjs/docsify/pulls).

#### Nhấp để xem trước

<div class="demo-theme-preview">
 <a data-theme="vue">vue.css</a>
 <a data-theme="buble">buble.css</a>
 <a data-theme="dark">dark.css</a>
 <a data-theme="pure">pure.css</a>
</div>

<style>
.demo-theme-preview a {
padding-right: 10px;
 }
.demo-theme-preview a:hover {
cursor: pointer;
text-decoration: underline;
 }
</style>

<script>
var preview = Docsify.dom.find('.demo-theme-preview');
var themes = Docsify.dom.findAll('[rel="stylesheet"]');
 preview.onclick = function (e) {
var title = e.target.getAttribute('data-theme');
 themes.forEach(function (theme) {
 theme.disabled = theme.title !== title;
 });
 };
</script>

## Các themes khác

- [docsify-themeable](https://jhildenbiddle.github.io/docsify-themeable/#/) Một hệ thống theme đơn giản và thú vị cho docsify.