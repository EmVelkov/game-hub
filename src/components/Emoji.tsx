import bullsEyes from "../assets/bullsEyes.jpg";
import thumbsUp from "../assets/thumbsUp.png";
import mehFace from "../assets/mehFace.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
	rating: number;
}

const Emoji = ({ rating }: Props) => {
	if (rating < 3) return null;

	const emojiMap: { [key: number]: ImageProps } = {
		3: { src: mehFace, alt: "meh", boxSize: "25px" },
		4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
		5: { src: bullsEyes, alt: "exceptional", boxSize: "25px" },
	};
	return <Image {...emojiMap[rating]} marginTop={2}/>;
};

export default Emoji;
