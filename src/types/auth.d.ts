// auth types file

export type IUserProfileRoleType = "ADMIN" | "USER" | "MODERATOR";

export interface User {
  id: string;
  user_id: string;
  email: string;
  fullname: string;
  avatar: string;
  role: IUserProfileRoleType;
  created_at: string;
  updated_at: string;
  isUserVerified?: boolean;
  phone?: string;
  address?: string;
  tokenExpiresIn?: number;
}
