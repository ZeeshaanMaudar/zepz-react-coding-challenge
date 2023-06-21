export enum FollowStatus {
	FOLLOWING = 'following',
	UNFOLLOWING = 'null',
	BLOCKED = 'blocked',
}

export type FollowersMap = {
	[index: number]: string | null;
}
