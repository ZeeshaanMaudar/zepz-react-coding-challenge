import React, { FC } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ArrowUpward as ArrowUpIcon, ArrowDownward  as ArrowDownIcon } from '@mui/icons-material';

import { SortOrder, SortOrderButtonsProps } from './types';

export const SortOrderButtons: FC<SortOrderButtonsProps> = ({ sortOrder, setSortOrder, disabled }) => {

	const handleSortOrder = (
    event: React.MouseEvent<HTMLElement>,
    newSortOrder: string,
  ) => {
    setSortOrder(newSortOrder);
  };

  return (
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
  );
};
