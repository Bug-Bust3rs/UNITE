import { useState } from "react";
import axios from "axios";
import { LoginFormData } from "../interfaces";


export const useLogin = () => {

  const [error, setError] = useState<boolean>(false);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [isSucess, setisSucess] = useState<boolean>(false);
  const login = async ({ email, password }: LoginFormData) => {
    setisLoading(true);
    setError(false);
    try {
      await axios.post(
        `${import.meta.env.VITE_API}/api/auth/login`,
        {
          email,
          password,
        }
      );
    
      setisSucess(true);
      setisLoading(false);
      
    } catch (error) {
      console.error("Login error:", error);
      setError(true);
      setisSucess(false);
      setTimeout(() => {
        setisLoading(false);
      }, 3000);
    }
  };
  return { login, error, isLoading, isSucess };
};