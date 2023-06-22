import { Dispatch, SetStateAction } from "react";

export const enum SortCategory {
	REPUTATION = 'reputation',
	NAME = 'name',
}

export interface SortCategoriesFormProps {
	sortCategory: string;
	setSortCategory: Dispatch<SetStateAction<string>>;
	disabled: boolean;
}
