import React, { FC } from 'react';

import { Box, Button } from '@mui/material';

import { MenuBarProps } from './types';

import { SortCategoriesForm } from '../SortCategoriesForm';
import { SortOrderButtons } from '../SortOrderButtons';

import { AppBarStyled, BoxWrapper, ToolbarStyled } from './styles';

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
					<SortOrderButtons
						sortOrder={sortOrder}
						setSortOrder={setSortOrder}
						disabled={disabled}
					/>
				</BoxWrapper>
				<Box>
					<Button onClick={handleGoToPreviousPage} disabled={!hasPreviousPage || disabled}>Previous</Button>
					<Button onClick={handleGoToNextPage} disabled={!hasMorePages || disabled}>Next</Button>
				</Box>
			</ToolbarStyled>
		</AppBarStyled>
	);
};
