import React, { FC, useState } from 'react';
import { AxiosError } from 'axios';

import { Alert, CircularProgress } from '@mui/material';

import { useFetchUsers } from '../../api/users';

import { UsersList } from '../../components/UsersList/UsersList';
import { MenuBar } from '../../components/MenuBar';

import { SpinnerContainer, Wrapper } from './styles';
import { SortCategory, SortOrder } from '../../components/MenuBar/type';
import { UserItem } from '../../api/users/types';



export const UsersPage: FC = () => {

	const [sortCategory, setSortCategory] = useState<string>(SortCategory.REPUTATION);
	const [sortOrder, setSortOrder] = useState<string>(SortOrder.DESC);
	const [page, setPage] = useState<number>(1);

	const { loading, usersList, error, hasMorePages } = useFetchUsers({ sortCategory, sortOrder, page });

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

	const callUsersList = (usersList: UserItem[]) => {
		if (error || loading) return;
		return <UsersList usersList={usersList} />;
	};

  return (
  	<Wrapper maxWidth="sm">
			<MenuBar
				sortCategory={sortCategory}
				setSortCategory={setSortCategory}
				sortOrder={sortOrder}
				setSortOrder={setSortOrder}
				setPage={setPage}
				hasPreviousPage={page > 1}
				hasMorePages={hasMorePages}
				disabled={loading || !!error}
			/>
			{loadSpinner(loading)}
			{displayError(error)}
			{callUsersList(usersList)}
		</Wrapper>
	);
};
