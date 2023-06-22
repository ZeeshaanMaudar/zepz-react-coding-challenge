import { UrlParams, UsersResponseAPI } from '../types';
import { users } from '../users';

export const getUsers = async ({
	sortCategory,
	sortOrder,
	page
}: UrlParams): Promise<UsersResponseAPI> => {
	const { data } = await users.get(`?pagesize=20&order=${sortOrder}&sort=${sortCategory}&site=stackoverflow&page=${page}`);
	return data;
};
