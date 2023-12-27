import {
	HStack,
	List,
	ListItem,
	Image,
	Text,
	Spinner,
	Button,
	Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data, isLoading, error } = useGenres();

	if (isLoading) return <Spinner>Loading...</Spinner>;
	if (error) return null;
	return (
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								src={getCroppedImageUrl(genre.image_background)}
								boxSize="32px"
								borderRadius={8}
								objectFit="cover"
							></Image>
							<Button
								onClick={() => onSelectGenre(genre)}
								fontSize="lg"
								variant="link"
								fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
