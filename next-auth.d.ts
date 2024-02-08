import NextAuth, { type DefaultSession } from 'next-auth';

export type ExtendedUser = DefaultSession['user'] & {
  role: ADMIN | USER;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  cart: string[];
};

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
}
