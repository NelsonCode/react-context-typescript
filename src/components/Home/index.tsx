import { useContext } from "react";
import UserContext from "../../context/users";
import { UserContextType } from "../../context/types";

function Home() {
  const { UsersContext, setUsersContext } = useContext(
    UserContext
  ) as UserContextType;

  const addUser = () => {
    const newUser = {
      id: crypto.randomUUID(),
      name: "Sebastian",
      lastname: "Ramirez",
      age: 30,
    };

    setUsersContext([...UsersContext, newUser]);
  };
  return <button onClick={addUser}>CLICK</button>;
}

export default Home;
