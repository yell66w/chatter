import { createContext } from "react";

export const UserContext = createContext<{
  user: {
    displayName: string;
    email: string;
    createdAt: string;
    id: string;
  } | null;
  signin: (
    variables: { email: string; password: string },
    callback: () => void
  ) => void;
  signout: (callback: () => void) => void;
}>({
  user: null,
  signin: () => {},
  signout: () => {},
});
