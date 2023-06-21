export interface UserItem {
    display_name: string;
    user_id: string;
    profile_image: string;
    reputation: number;
}
export interface UsersResponseAPI {
    items: UserItem[]
}
