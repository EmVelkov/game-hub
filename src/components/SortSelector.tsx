import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

const SortSelector = () => {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
				Order by: relevance
			</MenuButton>
			<MenuList>
				<MenuItem>Relevance</MenuItem>
				<MenuItem>Date added</MenuItem>
				<MenuItem>Name</MenuItem>
				<MenuItem>Relese date</MenuItem>
				<MenuItem>Popularity</MenuItem>
				<MenuItem>Average rating</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default SortSelector;