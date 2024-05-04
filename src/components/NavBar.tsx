import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/vintage-badge-hand-holding-joystick-vector-illustration-round-label-with-gamepad_74855-11224.avif";
import ColorModeSwitch from "./colorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<HStack padding="10px">
			<Link to="/">
				<Image
					src={logo}
					boxSize="60px"
					borderRadius="36px"
					objectFit={"cover"}
				></Image>
			</Link>
			<SearchInput></SearchInput>
			<ColorModeSwitch></ColorModeSwitch>
		</HStack>
	);
};
export default NavBar;
