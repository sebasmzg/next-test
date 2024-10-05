import NextAuth,{CredentialsSignin} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { IUserLogin } from "./models/models";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email:{label: "Email", type: "email", placeholder: "test@mail.com"},
        password: {label: "Password", type: "password", placeholder: "********"},
      },
      async authorize(credentials:Record<"email" | "password", string> | undefined):Promise<IUserLogin> | null{ {
        const { email, password } = credentials || {};
        // Add logic here to look up the user from the credentials supplied
        console.log(email, password);

        const userLogin = await Login(email, password);
        if(email=== "me@email.com" && password === "1234")
          return {
            id: "1",
            name: "me",
            email: "test@email.com"
          };
        throw new CredentialsSignin("Invalid credentials");
      },
    }),
  ],
});
