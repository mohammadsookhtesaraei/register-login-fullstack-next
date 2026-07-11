"use client";

import Login from "@/app/(auth)/auth/components/Login";
import Register from "@/app/(auth)/auth/components/Register";
import { useState } from "react";

const Auth = () => {
  const [step, setStep] = useState(1);

  const authRender = (steps: number) => {
    switch (steps) {
      case 1:
        return <Register />;
      case 2:
        return <Login />;
    }
  };

  return <div className="flex justify-center">
    {authRender(step)}
  </div>;
};
export default Auth;
