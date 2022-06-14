import Home from "./components/Home";
import { UsersContextProvider } from "./context/users";

function App() {
  return (
    <UsersContextProvider>
      <Home />
    </UsersContextProvider>
  );
}

export default App;
