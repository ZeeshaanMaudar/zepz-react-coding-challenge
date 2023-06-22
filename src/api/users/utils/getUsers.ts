import { UrlParams, UsersResponseAPI } from '../types';
import { users } from '../users';

export const getUsers = async ({ sortCategory, sortOrder }: UrlParams): Promise<UsersResponseAPI> => {
    const { data } = await users.get(`?pagesize=20&order=${sortOrder}&sort=${sortCategory}&site=stackoverflow`);
    return data;
};
