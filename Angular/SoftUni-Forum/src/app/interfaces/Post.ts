import { Theme } from "./Theme";
import { User } from "./User";

export interface Post {
    created_at: string;
    likes: string[];
    text: string;
    themeId: Theme;
    updatedAt: string;
    userId: User
    __v: number;
    _id: string;
}