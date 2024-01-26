import { AxiosResponse } from 'axios';
import { $voxmentor_api_public } from './instances';
import * as types from './types';
import * as urls from './urls';


export class Auth {
  
}
export class User{
    static async getUsers(): Promise<AxiosResponse<types.usersType>> {
        return await $voxmentor_api_public.get<types.usersType>(urls.user.get(), {
            params: {
            }
        });
    }
}