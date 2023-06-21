import React from 'react';
import { AxiosError } from 'axios';

import { Alert, CircularProgress } from '@mui/material';

import { useFetchUsers } from '../../api/users';

import { SpinnerContainer, Wrapper } from './styles';
import { UsersList } from '../../components/UsersList/UsersList';


export const UsersPage = () => {

	const { loading, usersList, error } = useFetchUsers();

	const loadSpinner = (loading: boolean) => {
		if (!loading) return;
	
		return (
			<SpinnerContainer>
				<CircularProgress />
			</SpinnerContainer>
		);
	};

	const displayError = (error: AxiosError | undefined) => {
		if (!error) return;

		return (
			<Alert severity="error" color="error">
				{error.message}
			</Alert>
		);
	};

  return (
  		<Wrapper maxWidth="sm">
				{loadSpinner(loading)}
				{displayError(error)}
			<UsersList usersList={usersList} />
		</Wrapper>
	);
};
