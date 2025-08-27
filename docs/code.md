# Làm nổi bật ngôn ngữ
Docsify sử dụng [Prism](https://prismjs.com) để làm nổi bật các khối mã trong trang của bạn. Prism hỗ trợ các ngôn ngữ sau theo mặc định:
* Markup - `markup`, `html`, `xml`, `svg`, `mathml`, `ssml`, `atom`, `rss`
* CSS - `css`
* C-like - `clike`
* JavaScript - `javascript`, `js`

Hỗ trợ cho [các ngôn ngữ bổ sung](https://prismjs.com/#supported-languages) có sẵn bằng cách tải các [tập tin ngữ pháp](https://cdn.jsdelivr.net/npm/prismjs@1/components/) cụ thể cho ngôn ngữ qua CDN:
```html
<script src="//cdn.jsdelivr.net/npm/prismjs@1/components/prism-bash.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/prismjs@1/components/prism-php.min.js"></script>
```

Để bật làm nổi bật cú pháp, bao bọc mỗi khối mã trong ba dấu backtick với [ngôn ngữ](https://prismjs.com/#supported-languages) được chỉ định trên dòng đầu tiên:
````
```html
<p>Đây là một đoạn văn</p>
<a href="//docsify.js.org/">Docsify</a>
```
```bash
echo "hello"
```
```php
function getAdder(int $x): int 
{
    return 123;
}
```
````

Markdown ở trên sẽ được hiển thị như:
```html
<p>Đây là một đoạn văn</p>
<a href="//docsify.js.org/">Docsify</a>
```
```bash
echo "hello"
```
```php
function getAdder(int $x): int 
{
    return 123;
}
```

## Làm nổi bật Nội dung Động
Các khối mã [được tạo động từ javascript](https://docsify.js.org/#/configuration?id=executescript) có thể được làm nổi bật bằng phương thức `Prism.highlightElement` như sau:
```javascript
var code = document.createElement("code");
code.innerHTML = "console.log('Hello World!')";
code.setAttribute("class", "lang-javascript");
Prism.highlightElement(code);
```