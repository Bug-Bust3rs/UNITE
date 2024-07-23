import { useState } from "react";
import axios from "axios";
import { LoginFormData } from "../interfaces";
import { useNavigate } from "react-router-dom";


export const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [isSucess, setisSucess] = useState<boolean>(false);
  const login = async ({ email, password }: LoginFormData) => {
    setisLoading(true);
    setError(false);
    try {
      await axios.post(
        `${import.meta.env.VITE_API}/api/v0.1/auth/login`,
        {
          email,
          password,
        }
      );
    
      setisSucess(true);
      setisLoading(false);
      


      setTimeout(() => {
        navigate(`/otp/${email}`);
      }, 2000);
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