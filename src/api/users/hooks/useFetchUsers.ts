import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { getUsers } from '..';
import { UrlParams, UserItem, UsersResponseAPI } from '../types';

export const useFetchUsers = ({ sortCategory, sortOrder, page }: UrlParams) => {
	const [loading, setLoading] = useState(false);
	const [usersList, setUsersList] = useState<UserItem[]>([]);
	const [error, setError] = useState<AxiosError>();
	const [hasMorePages, setHasMorePages] = useState<boolean>(true);

	useEffect(() => {
		setLoading(true)
		getUsers({ sortCategory, sortOrder, page })
		.then((data: UsersResponseAPI) => {
				setUsersList(data.items);
				setLoading(false);
				setHasMorePages(data.has_more)
		})
		.catch((error: AxiosError) => {
				setError(error);
		})
		.finally(() => setLoading(false));
	}, [sortCategory, sortOrder, page])

	return { loading, usersList, error, hasMorePages };
};