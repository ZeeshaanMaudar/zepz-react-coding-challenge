import axios from 'axios';

import { BASE_URL } from './constants';

// create new instance of axios
export const users = axios.create({
    baseURL: BASE_URL
});
