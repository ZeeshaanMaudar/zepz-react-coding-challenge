import { FollowStatus, FollowersMap } from "./types";

export const setFollowStatus = (userId: number) => {
	localStorage.setItem(`${userId}`, FollowStatus.FOLLOWING);
};

export const setUnFollowStatus = (userId: number) => {
	localStorage.setItem(`${userId}`, FollowStatus.UNFOLLOWING);
};

export const getFollowStatus = (userIdsList: number[]) => {

  const followStatusMap: FollowersMap = {};

	userIdsList.forEach((userId: number) => {
		const status = localStorage.getItem(`${userId}`);
		followStatusMap[userId] = status || null;
	});

	return followStatusMap;
};
