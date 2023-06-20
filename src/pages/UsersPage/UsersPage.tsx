import React from 'react';

import { Alert, CircularProgress } from '@mui/material';

import { useFetchUsers } from '../../api/users';

import { SpinnerContainer, Test } from './styles';


export const UsersPage = () => {

	const { loading, usersList, error } = useFetchUsers();

	console.log('usersData: ', usersList);
	if (error) {
		return (
			<Alert severity="error" color="error">
				{error.message}
			</Alert>
		);
	}

	if (loading) {
		return (
			<SpinnerContainer>
				<CircularProgress />
			</SpinnerContainer>
		);
	}

  return <Test>This is the Users Page</Test>;
};
