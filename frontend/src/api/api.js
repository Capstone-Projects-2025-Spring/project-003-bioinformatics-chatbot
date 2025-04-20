import axios from "axios";

export default axios.create({
	baseURL: "https://chat.bscb.site/chat",
	adminURL: "https://chat.bscb.site",
});
