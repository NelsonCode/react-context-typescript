export type User = {
  id: string;
  name: string;
  lastname: string;
  age: number;
};

export type UserContextType = {
  UsersContext: Array<User>;
  setUsersContext: (value: Array<User>) => void;
};
