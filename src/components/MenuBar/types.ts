import { Dispatch, SetStateAction } from 'react';

export interface MenuBarProps {
	sortCategory: string;
	setSortCategory: Dispatch<SetStateAction<string>>;
	sortOrder: string;
	setSortOrder: Dispatch<SetStateAction<string>>;
	setPage: Dispatch<SetStateAction<number>>;
	hasPreviousPage: boolean;
	hasMorePages: boolean;
	disabled: boolean;
}
