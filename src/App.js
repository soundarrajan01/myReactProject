import logo from "./logo.svg";
import "./App.css";
import { createContext, useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./router";
import Account from "./Account";
import Setting from "./Settings";
import Profile from "./Profile";
import LogInPage from "./Login";
import Sample from "./Sample";
import Formik from "./formik";
import styles from "./routerTask.module.css";
import Autheroute, { Privaterouter } from "./Privaterouter";
import { getCookie } from "./utility";
import Error from "./Error";
import Yup from "./yup";
import Checkbox from "./Checkbox";
export const UserContext = createContext();
function App() {
  console.log(getCookie("data"), "====data");
  const [isLoggedin, setisLoggedin] = useState(
    getCookie("data") !== "" ? JSON.parse(getCookie("data")) : null
  );
  const [isLoading, setisLoading] = useState(false);
  // const checkLoader = () => {
  //   let userdata = getCookie("data");
  //   if (userdata === "") {
  //     setisLoading(true);
  //   } else {
  //     setisLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   // document.cookie = "username=ffff";
  //   check();
  // }, []);
  // const check = () => {
  //   let userdata = getCookie("data");

  //   if (userdata !== undefined) {
  //     setisLoading(false);
  //     setisLoggedin(true);
  //   } else {
  //     setisLoading(false);
  //     setisLoggedin(false);
  //   }
  // };

  const handleValue = (data) => {
    setisLoggedin(data);
  };
  const handleLoader = (data) => {
    setisLoading(data);
  };

  return (
    <div className="App">
      {isLoading ? (
        <div className={styles.loaderhead}>
          <div className={styles.loader} />
        </div>
      ) : null}
      {/* <Routes>
     // <Route path="/home" element={<Router />}>
          <Route path=":id" element={<Router />} />
        </Route>
      </Routes> */}
      <UserContext.Provider
        value={{
          isLoggedin: isLoggedin,
          handleLoader: handleLoader,
          handleValue: handleValue,
          isLoading: isLoading,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Autheroute>
                <LogInPage />
              </Autheroute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Privaterouter>
                <Home />
              </Privaterouter>
            }
          >
            <Route path="profile" element={<Profile />} />
            <Route path="account" element={<Account />} />
            <Route path="setting" element={<Setting />} />
          </Route>

          <Route path="sample/:data" element={<Sample />} />
          <Route path="*" element={<Error />} />
          <Route path="formik" element={<Formik />} />
          <Route path="yup" element={<Yup />} />
          <Route path="checkbox" element={<Checkbox />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
