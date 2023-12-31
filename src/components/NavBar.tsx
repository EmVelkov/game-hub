import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/vintage-badge-hand-holding-joystick-vector-illustration-round-label-with-gamepad_74855-11224.avif";
import ColorModeSwitch from "./colorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
	onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
	return (
		<HStack padding="10px">
			<Image src={logo} boxSize="60px" borderRadius="36px"></Image>
			<SearchInput onSearch={onSearch}></SearchInput>
			<ColorModeSwitch></ColorModeSwitch>
		</HStack>
	);
};
export default NavBar;
