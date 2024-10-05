"use client";

import AuthForm from "@/components/AuthForm";
import { Input } from "@nextui-org/react";
//import { useFormState } from "react-dom";
//import { continueWithCredentials } from "@/app/actions/auth";

export default function SignInPage(){
    //const [state, signInAction] = useFormState(continueWithCredentials, {});
    return (
        <AuthForm
      footerItems={[
        { label: "Create an account", linkText: "Sign Up", link: "/sign-up" },
      ]}
      btnLabel="Sign In"
      title="Log In"
    //   action={signInAction}
    >
      <Input placeholder="Email" name="email" />
      <Input placeholder="Password" type="password" name="password" />
    </AuthForm>
    );
}