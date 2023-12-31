import { useEffect, useState } from "react";
import apiClient from "../services/api-clients";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponce<T> {
	count: number;
	results: T[];
}

const useData = <T>(
	endpoint: string,
	requestConfig?: AxiosRequestConfig,
	dependencies?: any[]
) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setErrors] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(
		() => {
			const controller = new AbortController();

			setLoading(true);
			apiClient
				.get<FetchResponce<T>>(endpoint, {
					signal: controller.signal,
					...requestConfig,
				})
				.then((res) => {
					setData(res.data.results);
					setLoading(false);
				})
				.catch((err) => {
					if (err instanceof CanceledError) return;
					setErrors(err.message);
					setLoading(false);
				});

			return () => controller.abort();
		},
		dependencies ? [...dependencies] : []
	);

	return { data, error, isLoading };
};

export default useData;
