import React, { FC } from 'react';

import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	ToggleButton,
	ToggleButtonGroup,
} from '@mui/material';

import { ArrowUpward as ArrowUpIcon, ArrowDownward  as ArrowDownIcon } from '@mui/icons-material'

import { SortCategory, MenuBarProps, SortOrder } from './type';

import { AppBarStyled, BoxWrapper, ToolbarStyled } from './styles';

export const MenuBar: FC<MenuBarProps> = ({
	sortCategory,
	setSortCategory,
	sortOrder,
	setSortOrder,
	setPage,
	hasPreviousPage,
	hasMorePages
}) => {

	const handleSortCategoryChange = (event: SelectChangeEvent) => {
    setSortCategory(event.target.value as string);
  };

	const handleSortOrder = (
    event: React.MouseEvent<HTMLElement>,
    newSortOrder: string,
  ) => {
    setSortOrder(newSortOrder);
  };

	const handleGoToPreviousPage = () => {
		setPage(previousPage => previousPage - 1);
	};

	const handleGoToNextPage = () => {
		setPage(previousPage => previousPage + 1);
	};

  return (
		<AppBarStyled position="sticky" color="inherit">
			<ToolbarStyled>
					<BoxWrapper>
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
								<MenuItem value={SortCategory.NAME}>{SortCategory.NAME}</MenuItem>
							</Select>
						</FormControl>
						<Box>
							<ToggleButtonGroup
								value={sortOrder}
								exclusive
								onChange={handleSortOrder}
								aria-label="sort order"
							>
								<ToggleButton value={SortOrder.DESC} aria-label="descending order">
									<ArrowDownIcon />
								</ToggleButton>
								<ToggleButton value={SortOrder.ASC} aria-label="ascending order">
									<ArrowUpIcon />
								</ToggleButton>
							</ToggleButtonGroup>
						</Box>
				</BoxWrapper>
				<Box>
					<Button onClick={handleGoToPreviousPage} disabled={!hasPreviousPage}>Previous</Button>
					<Button onClick={handleGoToNextPage} disabled={!hasMorePages}>Next</Button>
				</Box>
			</ToolbarStyled>
		</AppBarStyled>
	);
};
