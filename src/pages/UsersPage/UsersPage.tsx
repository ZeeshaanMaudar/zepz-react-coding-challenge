import React from 'react';

import { Alert, CircularProgress } from '@mui/material';

import { useFetchUsers } from '../../api/users';

import { SpinnerContainer, Wrapper } from './styles';
import { UsersList } from '../../components/UsersList/UsersList';


export const UsersPage = () => {

	const { loading, usersList, error } = useFetchUsers();

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

  return (
  		<Wrapper>
			<UsersList usersList={usersList} />
		</Wrapper>
	);
};
