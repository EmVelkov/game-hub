import axios from "axios";
export interface FetchResponce<T> {
	count: number;
	results: T[];
}

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "8890f351579046be8e8d423136f3bbe6",
	},
});
