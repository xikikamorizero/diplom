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
                    limit,
                },
            }
        );
    }

    static async getUser({
        id,
    }: types.ID): Promise<AxiosResponse<types.userType>> {
        return await $voxmentor_api_public.get<types.userType>(
            urls.user.getUser(id),
            {
                params: {},
            }
        );
    }

    static async getProfile(): Promise<AxiosResponse<types.userType>> {
        return await $voxmentor_api_public.get<types.userType>(
            urls.user.getProfile(),
            {
                params: {},
            }
        );
    }

    static async like({
        id,
    }: types.ID): Promise<AxiosResponse<types.LikeAndDislikeResponse>> {
        return await $voxmentor_api_public.post<types.LikeAndDislikeResponse>(
            urls.user.like(id),
            {
                params: {},
            }
        );
    }

    static async unlike({
        id,
    }: types.ID): Promise<AxiosResponse<types.LikeAndDislikeResponse>> {
        return await $voxmentor_api_public.delete<types.LikeAndDislikeResponse>(
            urls.user.unlike(id),
            {
                params: {},
            }
        );
    }

    static async dislike({
        id,
    }: types.ID): Promise<AxiosResponse<types.LikeAndDislikeResponse>> {
        return await $voxmentor_api_public.post<types.LikeAndDislikeResponse>(
            urls.user.dislike(id),
            {
                params: {},
            }
        );
    }

    static async undislike({
        id,
    }: types.ID): Promise<AxiosResponse<types.LikeAndDislikeResponse>> {
        return await $voxmentor_api_public.delete<types.LikeAndDislikeResponse>(
            urls.user.undislike(id),
            {
                params: {},
            }
        );
    }

    static async subscribe({
        id,
    }: types.ID): Promise<AxiosResponse<types.LikeAndDislikeResponse>> {
        return await $voxmentor_api_public.post<types.LikeAndDislikeResponse>(
            urls.user.subscribe(id),
            {
                params: {},
            }
        );
    }

    static async unsubscribe({
        id,
    }: types.ID): Promise<AxiosResponse<types.LikeAndDislikeResponse>> {
        return await $voxmentor_api_public.delete<types.LikeAndDislikeResponse>(
            urls.user.unsubscribe(id),
            {
                params: {},
            }
        );
    }
}

export class Portfolio {
    static async getPortfolio({
        page,
        limit,
    }: types.defaultParamType): Promise<
        AxiosResponse<types.PortfolioListType>
    > {
        return await $voxmentor_api_public.get<types.PortfolioListType>(
            urls.portfolio.get(),
            {
                params: { page, limit },
            }
        );
    }
}
