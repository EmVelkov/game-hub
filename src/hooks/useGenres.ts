import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () => {
	const apiClient = new ApiClient<Genre>("/genres");

	return useQuery({
		queryKey: ["genres"],
		queryFn: apiClient.getAll,
		staleTime: ms('24h'), 
		initialData: genres
	});
};

export default useGenres;
