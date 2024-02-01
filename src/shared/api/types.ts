export type ID = {
    id: string;
};
export interface authType {
    email: string;
    password: string;
}
export interface LikeAndDislikeResponse {
    success: boolean;
    message: string;
}
export interface LoginResponseType {
    token: string;
}
export interface defaultParamType {
    page: number;
    limit: number;
}
export interface Subscription {
    subscriberId: number;
    authorId: number;
    createdAt: string;
    updatedAt: string;
}
export interface Dislike {
    id: number;
    userId: number;
    dislikedUserId: number;
    createdAt: string;
    updatedAt: string;
}
export interface Subscribers {
    id: number;
    email: string;
    name: string | null;
    avatar: string | null;
    description: string | null;
    place_of_work: string | null;
    science_degree: string | null;
    categories: string[] | null;
    contacts: string | null;
    banned: boolean;
    banReason: string | null;
    likes: number;
    dislikes: number;
    createdAt: string;
    updatedAt: string;
    Subscription: Subscription[];
}
export interface Likes {
    id: number;
    email: string;
    name: string | null;
    avatar: string | null;
    description: string | null;
    place_of_work: string | null;
    science_degree: string | null;
    categories: string[] | null;
    contacts: string | null;
    banned: boolean;
    banReason: string | null;
    likes: number;
    dislikes: number;
    createdAt: string;
    updatedAt: string;
    Dislike: Dislike[];
}
export interface userType {
    id: number;
    email: string;
    name: string | null;
    avatar: string | null;
    description: string | null;
    place_of_work: string | null;
    science_degree: string | null;
    categories: string[] | null;
    contacts: string | null;
    banned: boolean;
    banReason: string | null;
    likes: number;
    dislikes: number;
    createdAt: string;
    updatedAt: string;
    roles: any[];
    course: any[];
    postfolio: any[];
    subscriptions: Subscribers[];
    subscribers: Subscribers[];
    likedUsers: Likes[];
    dislikedUsers: Likes[];
}
export interface usersType {
    users: userType[];
    totalUsers: number;
    page: number;
    pageCount: number;
    limit: number;
}
export interface PortfolioType {
    id: number;
    title: string;
    content: string;
    image: string | null;
    docs: string | null;
    userId: number;
}

export interface PortfolioListType {
    portfolio: PortfolioType[];
    totalPortfolio: number;
    page: number;
    pageCount: number;
    limit: number;
}
