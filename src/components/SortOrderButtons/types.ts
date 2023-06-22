import { Dispatch, SetStateAction } from "react";

export const enum SortOrder {
	DESC = 'desc',
	ASC = 'asc',
}
export interface SortOrderButtonsProps {
	sortOrder: string;
	setSortOrder: Dispatch<SetStateAction<string>>;
	disabled: boolean;
}