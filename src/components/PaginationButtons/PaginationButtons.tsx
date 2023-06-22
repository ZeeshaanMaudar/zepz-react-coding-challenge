import React, { FC } from 'react';
import { Box, Button } from '@mui/material';

import { PaginationButtonsProps } from './types';

export const PaginationButtons: FC<PaginationButtonsProps> = ({
	setPage,
	hasPreviousPage,
	hasMorePages,
	disabled
}) => {

	const handleGoToPreviousPage = () => {
		setPage((previousPage: number) => previousPage - 1);
	};

	const handleGoToNextPage = () => {
		setPage((previousPage: number) => previousPage + 1);
	};

	return (
		<Box>
			<Button onClick={handleGoToPreviousPage} disabled={!hasPreviousPage || disabled}>Previous</Button>
			<Button onClick={handleGoToNextPage} disabled={!hasMorePages || disabled}>Next</Button>
		</Box>
	);
};
