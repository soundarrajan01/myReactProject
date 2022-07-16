import {
  Routes,
  Route,
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import styles from "./routerTask.module.css";
import setCookie from "./utility";
import * as React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";
// function App() {
export default function Sample() {
  let use = useParams();
  // let a = 5;
  let navigate = useNavigate();
  console.log(use.data, "use");
  let location = useLocation();
  console.log(location.pathname, "location");
  let [Search, setSearch] = useSearchParams();
  const search = () => {
    setSearch();
  };
  React.useEffect(() => {
    // ga("send", "pageview");
  }, []);

  return (
    <div>
      <h1
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        useLocation
      </h1>
      <h1>{use.data}</h1>
    </div>
  );
}

// export default function Sample() {
//   let params = useParams();
//   console.log(params, "params");
//   return (
//     <div>
//       <h1>ffff</h1>
//       <h1>Invoice {params.invoiceId}</h1>
//     </div>
//   );
// }

// function Invoice() {

//   return
// }
