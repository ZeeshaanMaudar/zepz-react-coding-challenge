import React, { FC } from 'react';

import {
	Box,
	Button,
	ToggleButton,
	ToggleButtonGroup,
} from '@mui/material';

import { ArrowUpward as ArrowUpIcon, ArrowDownward  as ArrowDownIcon } from '@mui/icons-material'

import { MenuBarProps, SortOrder } from './types';

import { AppBarStyled, BoxWrapper, ToolbarStyled } from './styles';
import { SortCategoriesForm } from '../SortCategoriesForm';

export const MenuBar: FC<MenuBarProps> = ({
	sortCategory,
	setSortCategory,
	sortOrder,
	setSortOrder,
	setPage,
	hasPreviousPage,
	hasMorePages,
	disabled,
}) => {

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
					<SortCategoriesForm
						sortCategory={sortCategory}
						setSortCategory={setSortCategory}
						disabled={disabled}
					/>
					<Box>
						<ToggleButtonGroup
							value={sortOrder}
							exclusive
							onChange={handleSortOrder}
							aria-label="sort order"
							disabled={disabled}
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
					<Button onClick={handleGoToPreviousPage} disabled={!hasPreviousPage || disabled}>Previous</Button>
					<Button onClick={handleGoToNextPage} disabled={!hasMorePages || disabled}>Next</Button>
				</Box>
			</ToolbarStyled>
		</AppBarStyled>
	);
};
