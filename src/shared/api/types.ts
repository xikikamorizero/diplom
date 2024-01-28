export interface authType {
    email: string;
    password: string;
}
export interface LoginResponseType {
   token:string
}
export interface defaultParamType {
    page: number;
    limit: number;
}
export interface userType {
    id: number;
    email: string;
    password: string;
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
    subscriptions: any[];
    subscribers: any[];
    likedUsers: any[];
    dislikedUsers: any[];
}
export interface usersType {
    users: userType[];
    totalUsers: number;
    page: number;
    pageCount: number;
    limit: number;
}
