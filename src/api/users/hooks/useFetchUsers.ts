import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { getUsers } from '..';
import { UserItem, UsersResponseAPI } from '../types';

export const useFetchUsers = () => {
    const [loading, setLoading] = useState(false);
    const [usersList, setUsersList] = useState<UserItem[]>([]);
    const [error, setError] = useState<AxiosError>();

    useEffect(() => {
        setLoading(true)
        getUsers()
        .then((data: UsersResponseAPI) => {
            setUsersList(data.items);
            setLoading(false);
        })
        .catch((error: AxiosError) => {
            setError(error);
        })
        .finally(() => setLoading(false));
    }, [])

    return { loading, usersList, error };
};