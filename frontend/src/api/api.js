import axios from "axios";

// const api = axios.create({
// 	baseURL: "https://bscb.site/chat",
// });
// adminURL = "https://chat.bscb.site";

//export default api;


export default axios.create({
	baseURL: "https://chat.bscb.site/chat",
	adminURL: "https://chat.bscb.site",
});