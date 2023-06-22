import { Dispatch, SetStateAction } from 'react';

export interface PaginationButtonsProps {
	setPage: Dispatch<SetStateAction<number>>;
	hasPreviousPage: boolean;
	hasMorePages: boolean;
	disabled: boolean;
}
