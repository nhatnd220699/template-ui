import axios from "../../assets/plugins/axios";
import DataSync from "./services/datasync";

const api = new DataSync(axios.create({ baseURL: '/template-ui' }));

api.registerGet('getUsers', '/users');
api.registerPost('createUser', '/users');
api.registerPatch('updateUser', '/users/:userId');
api.registerPut('replaceUser', '/users/:userId');
api.registerDelete('deleteUser', '/users/:userId');

const { getUsers } = api.endpoints;
const data = await getUsers();

if (api.hasError()) {
    console.log(api.getMsgError());
    return;
}
console.log(data, api.getMsgSuccess());


