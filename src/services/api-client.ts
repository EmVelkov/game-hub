import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponce<T> {
	count: number;
	next: string | null;
	results: T[];
}

const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "8890f351579046be8e8d423136f3bbe6",
	},
});

class ApiClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config: AxiosRequestConfig) => {
		return axiosInstance
			.get<FetchResponce<T>>(this.endpoint, config)
			.then((res) => res.data);
	};
}

export default ApiClient;
