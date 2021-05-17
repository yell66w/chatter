import { createContext } from "react";

export const UserContext = createContext({
  currentUser: {
    displayName: "",
    email: "",
    id: "",
    createdAt: "",
  },
  setCurrentUser: ({}: {
    displayName: string;
    email: string;
    id: string;
    createdAt: string;
  }) => {},
});
