import { FollowStatus, FollowersMap } from "./types";

export const setFollowStatus = (userId: number) => {
	localStorage.setItem(`${userId}`, FollowStatus.FOLLOWING);
};

export const getFollowStatus = (userIdsList: number[]) => {

  const followStatusMap: FollowersMap = {};

	userIdsList.forEach((userId: number) => {
		const status = localStorage.getItem(`${userId}`);
		followStatusMap[userId] = status;
	});

	return followStatusMap;
};
