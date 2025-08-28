## Khởi tạo

## Services
Yêu cầu sử  dụng `datasync.js`, chi tiết về service [xem tại](datasync.md).

## Plugins
Với plugins template yêu cầu sử dụng `axios.js`, chi tiết về  plugin [xem tại](../src/assets/plugins/axios/README.md).

## Folder structure

## Initial

Tại tệp `src/web/js/api.js` import các service và plugins cần thiết để  khởi tạo api instance và các endpoints;

```javascript
import axios from "../../assets/plugins/axios";
import DataSync from "./services/datasync";

const api = new DataSync(axios.create({ baseURL: '/template-ui' }));
```

## Đăng ký endpoints

```javascript
api.registerGet('getUsers', '/users');
api.registerPost('createUser', '/users');
api.registerPatch('updateUser', '/users/:userId');
api.registerPut('replaceUser', '/users/:userId');
api.registerDelete('deleteUser', '/users/:userId');
```

## Gọi endpoints
```javascript
const { getUsers } = api.endpoints;
const data = await getUsers() ?? []; // Mảng rỗng có nhiệm vụ là fallback để đảm bảo dữ liệu không nullnish , chú ý có trường hợp là {}

if (api.hasError()) { // Xử lý exception
    console.log(api.getMsgError());
    return;
}
console.log(data, api.getMsgSuccess()); // Thao tác với dữ liệu
```

