import { User } from "next-auth";

export interface IUserLogin extends User {
  id: string;
  name: string;
  email: string;
  password: string;
}
