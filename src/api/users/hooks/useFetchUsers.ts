import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { getUsers } from '..';
import { UrlParams, UserItem, UsersResponseAPI } from '../types';

export const useFetchUsers = ({ sortCategory, sortOrder }: UrlParams) => {
    const [loading, setLoading] = useState(false);
    const [usersList, setUsersList] = useState<UserItem[]>([]);
    const [error, setError] = useState<AxiosError>();

    useEffect(() => {
        setLoading(true)
        getUsers({ sortCategory, sortOrder })
        .then((data: UsersResponseAPI) => {
            setUsersList(data.items);
            setLoading(false);
        })
        .catch((error: AxiosError) => {
            setError(error);
        })
        .finally(() => setLoading(false));
    }, [sortCategory, sortOrder])

    return { loading, usersList, error };
};