import React, { useState, useEffect } from 'react';

import { setFollowStatus, getFollowStatus } from '..';
import { FollowersMap } from '../types';
import { UserItem } from '../../users/types';

export const useUserStatus = (usersList: UserItem[]) => {
	const userIds = usersList.map((user) => user.user_id);
	const [usersStatus, setUsersStatus] = useState<FollowersMap>({});

	useEffect(() => {
		const usersStatus = getFollowStatus(userIds);
		setUsersStatus(usersStatus);
	}, [usersList]);

	const followUser = (userId: number) => {
		setFollowStatus(userId);
		const usersStatus = getFollowStatus(userIds);
		setUsersStatus(usersStatus);
	};

	return { usersStatus, followUser };
};
