import styles from "./routerTask.module.css";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./App";
import setCookie, { checkCookie, getCookie } from "./utility";
export default function LogInPage() {
  const Logindata = useContext(UserContext);
  const [data, setData] = useState({ firstname: "", password: "" });
  console.log(data, "data");
  const handleButton = () => {
    Logindata.handleLoader(true);
    setCookie("data", JSON.stringify(data), 7);
    Logindata.handleValue(data);
    setTimeout(() => {
      Logindata.handleLoader(false);
    }, 3000);
  };
  return (
    <div className={styles.top}>
      <div className={styles.header}>
        <div className={styles.logInPageOutline}>
          <div className={styles.loginborder}>
            <h1>FIRSTNAME</h1>
            <input
              onChange={(e) => {
                setData({ ...data, firstname: e.target.value });
              }}
              name="firstname"
              type="text"
              placeholder="name"
            />
            <h1>PASSWORD</h1>
            <input
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
              type="password"
              placeholder="password"
            />

            <button
              onClick={() => {
                handleButton();
              }}
              className={styles.button}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
