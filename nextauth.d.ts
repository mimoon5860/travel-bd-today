export enum Role {
  user = "User",
  admin = "Admin",
}
// nextauth.d.ts
declare module "next-auth" {
  interface User {
    role?: Role;
    photo: string;
    phone: string;
    subscribed: boolean;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    role?: Role;
    subscribed: boolean;
  }
}
