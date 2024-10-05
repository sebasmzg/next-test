'use client';

import { Input } from "@nextui-org/react";
import AuthForm from "@/components/AuthForm";
// import { useFormState } from "react-dom";

export default function SigUpPage(){
    // const [state, singUpAction] = useFormState(signUp, {});
    return(
        <AuthForm
        // action={singUpAction}
        footerItems={[
          {
            label: "Already have an account",
            linkText: "Sign In",
            link: "/sign-in",
          }
        ]}
        btnLabel="Sign Up"
        title="Sign Up"
        // error={state.error}
        // message={state.success ? "Please check your email." : ""}
      >
        <Input
        //   errorMessage={state.errors?.name?.join(", ")}
        //   isInvalid={state.errors?.name ? true : false}
          placeholder="Name"
          name="name"
        />
        <Input
        //   errorMessage={state.errors?.email?.join(", ")}
        //   isInvalid={state.errors?.email ? true : false}
          placeholder="example@email.com"
          name="email"
        />
        <Input
        //   errorMessage={state.errors?.password?.join(", ")}
        //   isInvalid={state.errors?.password ? true : false}
          placeholder="Password"
          type="password"
        />
      </AuthForm>
    )
}