import { createContext, PropsWithChildren } from "react";
import { UserContextType } from "../types";
import { v4 as uuidv4 } from "uuid";

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const value: UserContextType = {
    userId: uuidv4(),
    userName: "Chris Smith",
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
