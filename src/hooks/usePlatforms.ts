import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import platforms from "../data/platforms";
import ms from "ms";
import Platform from "../entities/Platform";

const usePlatforms = () => {
	const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

	return useQuery({
		queryKey: ["platforms"],
		queryFn: apiClient.getAll,
		staleTime: ms("24h"),
		initialData: platforms,
	});
};
export default usePlatforms;
