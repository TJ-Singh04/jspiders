import { createContext, useContext, useState } from "react";
import App from "../App"
import Dashboard from "../Components/Dashboard";
import LoginPage from "../Components/Login";
const UserContext = createContext();

export const useUser = UserContext;

export const UserProvider = () => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user ,setUser}}>
      <App />
      <Dashboard/>
      <LoginPage />
    </UserContext.Provider>
  );
};
