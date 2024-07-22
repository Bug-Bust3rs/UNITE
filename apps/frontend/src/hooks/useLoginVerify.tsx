import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { LoginVerifyData } from "../interfaces";

export const useVerifyLogin = () => {
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [isSucess, setisSucess] = useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const verify = async ({ email, otp }: LoginVerifyData) => {
    setisLoading(true);
    setError(false);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/api/v0.1/auth/verify-otp/${email}?token=${otp}`
      );

      const userData = response.data;
      localStorage.setItem("user", JSON.stringify(userData));
      dispatch({ type: "LOGIN", payload: userData });
      setisSucess(true);
    } catch (error) {
      console.error("Verification error:", error);
      setError(true);
      setisSucess(false);
    } finally {
      setisLoading(false);
    }
  };

  return { verify, error, isLoading, isSucess };
};