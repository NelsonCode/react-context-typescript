import { createContext, ReactNode, useState } from "react";
import { User } from "./types";

const Context = createContext({});

interface Props {
  children: ReactNode;
}

export function UsersContextProvider({ children }: Props) {
  const [UsersContext, setUsersContext] = useState<Array<User>>([]);
  return (
    <Context.Provider value={{ UsersContext, setUsersContext }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
