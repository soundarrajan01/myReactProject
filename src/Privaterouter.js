import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./App";

const Autheroute = ({ children }) => {
  //   console.log(children, "children");
  const { isLoggedin } = useContext(UserContext);
  console.log(isLoggedin, "isLoggedin");

  if (isLoggedin !== null) {
    return <Navigate to="/dashboard" />;
  }
  //  else {
  //   return <Navigate to="/" />;
  // }

  return children;
};
export default Autheroute;

export const Privaterouter = ({ children }) => {
  //   console.log(children, "children");
  const { isLoggedin } = useContext(UserContext);
  console.log(isLoggedin, "isLoggedin");

  if (isLoggedin === null) {
    return <Navigate to="/" />;
  }
  //    else {
  //     return <Navigate to="/" />;
  //   }

  return children;
};
