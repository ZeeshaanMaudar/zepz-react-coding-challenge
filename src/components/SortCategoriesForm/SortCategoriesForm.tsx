import React, { FC } from 'react';
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent
} from '@mui/material';

import { SortCategory, SortCategoriesFormProps } from './types';

export const SortCategoriesForm: FC<SortCategoriesFormProps> = ({ sortCategory, setSortCategory, disabled }) => {

	const handleSortCategoryChange = (event: SelectChangeEvent) => {
    setSortCategory(event.target.value as string);
  };

	return (
		<FormControl sx={{ m: 1, minWidth: 80 }} disabled={disabled}>
			<InputLabel id="sort">Sort</InputLabel>
			<Select
				labelId="sort-select"
				id="sort-select"
				value={sortCategory}
				label="Sort"
				onChange={handleSortCategoryChange}
			>
				<MenuItem value={SortCategory.REPUTATION}>{SortCategory.REPUTATION}</MenuItem>
				<MenuItem value={SortCategory.NAME}>{SortCategory.NAME}</MenuItem>
			</Select>
		</FormControl>
	);
};
