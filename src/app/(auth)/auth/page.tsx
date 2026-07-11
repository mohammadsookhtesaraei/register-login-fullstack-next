"use client";

import Login from "@/app/(auth)/auth/components/Login";
import Register from "@/app/(auth)/auth/components/Register";
import { sendFormData } from "@/core/authService";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

const Auth = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: sendFormData,
  });

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { message } = await mutateAsync({
        email: formData.email,
        password: formData.password,
      });
      toast.success(message);
      setFormData({
        email:"",
        password:""
      });
      setStep(2)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  const authRender = (steps: number) => {
    switch (steps) {
      case 1:
        return (
          <Register
            email={formData.email}
            password={formData.password}
            changeHandler={changeHandler}
            formHanadler={formHandler}
            isLoading={isLoading}
          />
        );
      case 2:
        return <Login />;
    }
  };

  return <div className="flex justify-center">{authRender(step)}</div>;
};
export default Auth;
