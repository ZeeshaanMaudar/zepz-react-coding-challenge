import React, { FC, useState } from 'react';
import { AxiosError } from 'axios';

import { Alert, CircularProgress } from '@mui/material';

import { useFetchUsers } from '../../api/users';

import { UsersList } from '../../components/UsersList/UsersList';
import { MenuBar } from '../../components/MenuBar';

import { SpinnerContainer, Wrapper } from './styles';



export const UsersPage: FC = () => {

	const [sortCategory, setSortCategory] = useState<string>('');

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
			<MenuBar sortCategory={sortCategory} setSortCategory={setSortCategory} />
			{loadSpinner(loading)}
			{displayError(error)}
			<UsersList usersList={usersList} />
		</Wrapper>
	);
};
