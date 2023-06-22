import { Dispatch, SetStateAction } from 'react';

export const enum SortCategory {
	REPUTATION = 'reputation',
	NAME = 'name',
	DISPLAY_NAME = 'display_name',
}

export interface MenuBarProps {
	sortCategory: string;
	setSortCategory: Dispatch<SetStateAction<string>>;
}
