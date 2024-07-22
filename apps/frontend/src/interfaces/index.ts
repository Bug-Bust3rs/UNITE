import { ReactNode } from "react";

export interface State {
  user: User | null;
}


export interface User {
  message?: string;
  success?: boolean;
  token?: string;
  email?: string;
  role?: string;
  id?: string;
  name?:string
}

export interface Action {
  type: string;
  payload?: unknown;
}

export interface AuthContextProviderProps {
  children: ReactNode;
}