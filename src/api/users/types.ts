export interface UserItem {
	display_name: string;
	user_id: number;
	profile_image: string;
	reputation: number;
}
export interface UsersResponseAPI {
	items: UserItem[]
}

export interface UrlParams {
	sortCategory: string;
	sortOrder: string;
}
