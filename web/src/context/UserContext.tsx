import { createContext } from "react";

export const UserContext = createContext({
  currentUser: {
    displayName: "",
    email: "",
    id: "",
    createdAt: "",
  },
  login: (
    id: string,
    displayName: string,
    email: string,
    createdAt: string
  ) => {},
});
