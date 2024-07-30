import React, { createContext, useReducer, useEffect } from "react";
import { State, Action, AuthContextProviderProps, User } from "../interfaces";

const initialState: State = {
  user: null,
};

export const AuthContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload as User };
    case "LOGOUT":
      return { ...state, user: null };
      case 'UPDATE_PROFILE_STATUS':
        return { ...state, user: { ...state.user, isProfileComplete : action.payload} };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      try {
        const user: User = JSON.parse(userString);
        dispatch({ type: "LOGIN", payload: user });
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
      }
    }
  }, []);


  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("user");
    }
  }, [state.user]);

  console.log("Auth Context State : ", state);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};