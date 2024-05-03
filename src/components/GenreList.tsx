import {
	HStack,
	List,
	ListItem,
	Image,
	Spinner,
	Button,
	Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
	const { data, isLoading, error } = useGenres();
	const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

	if (isLoading) return <Spinner>Loading...</Spinner>;
	if (error) return null;
	return (
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data?.results.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								src={getCroppedImageUrl(genre.image_background)}
								boxSize="32px"
								borderRadius={8}
								objectFit="cover"
							></Image>
							<Button
								onClick={() => setSelectedGenreId(genre.id)}
								fontSize="lg"
								variant="link"
								fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
								whiteSpace="wrap"
								textAlign="left"
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
