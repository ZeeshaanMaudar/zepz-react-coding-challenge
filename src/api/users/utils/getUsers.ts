import { UsersResponseAPI } from '../types';
import { users } from '../users';

export const getUsers = async (): Promise<UsersResponseAPI> => {
    const { data } = await users.get('');
    return data;
};
