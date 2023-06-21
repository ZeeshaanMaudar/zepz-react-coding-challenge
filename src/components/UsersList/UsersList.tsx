import React, { FC } from 'react';
import { Box } from '@mui/material';

import { User } from '../User/User';

import { UsersListProps } from './types';


export const UsersList: FC<UsersListProps> = ({ usersList }) => {

	return (
		<Box>
			{usersList.map((user) => {
				return <User key={user.user_id} user={user} />
			})}
		</Box>
	);

};