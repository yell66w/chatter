import { UserType } from "@context/User/UserProvider";
import { createContext } from "react";

export const UserContext = createContext<{
  user: UserType | null;
  signin: (
    variables: { email: string; password: string },
    callback: () => void
  ) => void;
  signout: (callback: () => void) => void;
  setUser: ({}: UserType) => void;
}>({
  user: null,
  signin: () => {},
  signout: () => {},
  setUser: () => {},
});
