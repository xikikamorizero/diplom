import { AxiosResponse } from "axios";
import { $voxmentor_api_public } from "./instances";
import * as types from "./types";
import * as urls from "./urls";

export class Auth {
    static async login(
        email: string,
        password: string
    ): Promise<AxiosResponse<types.LoginResponseType>> {
        return await $voxmentor_api_public.post<types.LoginResponseType>(
            urls.auth.login(),
            {
                email: email,
                password: password,
            }
        );
    }
    static async registration(
        email: string,
        password: string
    ): Promise<AxiosResponse<types.authType>> {
        return await $voxmentor_api_public.post<types.authType>(
            urls.auth.registration(),
            {
                email: email,
                password: password,
            }
        );
    }
}
export class User {
    static async getUsers({
        page,
        limit,
    }: types.defaultParamType): Promise<AxiosResponse<types.usersType>> {
        return await $voxmentor_api_public.get<types.usersType>(
            urls.user.get(),
            {
                params: {
                    page,
                    limit
                },
            }
        );
    }
}
