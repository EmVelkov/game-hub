import apiClient from "../services/api-clients";
import { GameQuery } from "../App";
import { FetchResponce } from "../services/api-clients";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
	useQuery<FetchResponce<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: () =>
			apiClient
				.get<FetchResponce<Game>>("/games", {
					params: {
						genres: gameQuery.genre?.id,
						parent_platforms: gameQuery.platform?.id,
						ordering: gameQuery.sortOrder,
						search: gameQuery.searchText,
					},
				})
				.then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000,
		// initialData: { count: games.length, results: games},
	});

export default useGames;
