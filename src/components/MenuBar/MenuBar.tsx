import React, { FC } from 'react';

import {
	AppBar,
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Toolbar
} from '@mui/material';

import { SortCategory, MenuBarProps } from './type';

export const MenuBar: FC<MenuBarProps> = ({ sortCategory, setSortCategory }) => {

	const handleSortCategoryChange = (event: SelectChangeEvent) => {
    setSortCategory(event.target.value as string);
  };

  return (
		<Box style={{ border: '1px solid red'}}>
			<AppBar position="sticky" color="transparent">
				<Toolbar>
					<FormControl sx={{ m: 1, minWidth: 80 }}>
						<InputLabel id="sort">Sort</InputLabel>
						<Select
							labelId="sort-select"
							id="sort-select"
							value={sortCategory}
							label="Sort"
							onChange={handleSortCategoryChange}
						>
							<MenuItem value={SortCategory.REPUTATION}>{SortCategory.REPUTATION}</MenuItem>
							<MenuItem value={SortCategory.DISPLAY_NAME}>{SortCategory.NAME}</MenuItem>
						</Select>
					</FormControl>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
