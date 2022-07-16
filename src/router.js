import { Link, Outlet, Router, useNavigate } from "react-router-dom";
import styles from "./routerTask.module.css";
import { useState } from "react";
export default function Home() {
  let navigate = useNavigate();
  const [Store, setStore] = useState({ data: "" });
  console.log(Store, "store");
  const handleSubmit = () => {
    navigate(`/Sample/${Store.data}`);
  };
  return (
    <div>
      <div>
        <div className={styles.border}>
          <p>home</p>
          <h1>home</h1>
          <h1>
            <nav>
              <Link to="home">HOME</Link>
            </nav>
          </h1>
          <h1>company name</h1>
          <h1>
            <Link to="SETTING">Setting</Link>
          </h1>
        </div>
        <div className={styles.side}>
          <Outlet />
        </div>
        <div className={styles.leftside}>
          <list>
            <ul>
              <li>
                <Link to="/dashboard/profile">PROFILE</Link>
              </li>
              <li>
                <Link to="/dashboard/account">ACCOUNT</Link>
              </li>
              <li>
                <Link to="/dashboard/prefer">PREFER</Link>
              </li>
              <li>
                <Link to="/dashboard/setting">SETTING</Link>
              </li>
              <li>
                <Link to="/dashboard/logout">LOGOUT</Link>
              </li>
            </ul>
          </list>
        </div>
        <div className={styles.router}>
          <input
            onChange={(e) => {
              setStore({ data: e.target.value });
            }}
            type="text"
            placeholder="type"
          ></input>
          <button
            onClick={() => {
              handleSubmit();
            }}
          >
            submit
          </button>
        </div>
        <div className={styles.footer}>
          <h1>ggg</h1>
        </div>
      </div>
    </div>
  );
}
