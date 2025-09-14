import { User } from "@/types/auth";

export const useSession = (): {
  user: User;
  isAuthenticated: boolean;
  isLoading: boolean;
} => {
  const user: User = {
    id: "1",
    user_id: "dev-001",
    email: "johndoe@gmail.com",
    fullname: "John Doe",
    avatar: "/images/avatar/dummyAvatar.jpg",
    role: "USER", // ADMIN, USER, MODERATOR
    phone: "1234567890",
    address: "123 Golf Club, Banglore, India",
    created_at: "2025-01-01",
    updated_at: "2025-02-01",
    isUserVerified: true,
    tokenExpiresIn: 3600, // 1 hour
  };

  return {
    user,
    isAuthenticated: true,
    isLoading: false,
  };
};
