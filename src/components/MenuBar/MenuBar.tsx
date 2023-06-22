import React, { FC } from 'react';

import { MenuBarProps } from './types';

import { SortCategoriesForm } from '../SortCategoriesForm';
import { SortOrderButtons } from '../SortOrderButtons';
import { PaginationButtons } from '../PaginationButtons';

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
				<PaginationButtons
					setPage={setPage}
					hasPreviousPage={hasPreviousPage}
					hasMorePages={hasMorePages}
					disabled={disabled}
				/>
			</ToolbarStyled>
		</AppBarStyled>
	);
};
