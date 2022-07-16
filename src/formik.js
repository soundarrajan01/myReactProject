import styles from "./formik.module.css";
import { useFormik } from "formik";
export default function Formik() {
  const validate = (values) => {
    const error = {};
    if (!values.Firstname) {
      error.Firstname = "required";
    } else if (values.Firstname.length > 15) {
      error.Firstname = "less then 15 char";
    }
    if (!values.Lastname) {
      error.Lastname = "required";
    } else if (values.Lastname.length > 15) {
      error.Lastname = "less then 15 char";
    }
    if (!values.email) {
      error.email = "required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      error.email = "invalid email id";
    }
    if (!values.password) {
      error.password = "required";
    } else if (/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)) {
      error.password = "use UPPER case";
    }
    if (!values.phonenumber) {
      error.phonenumber = "required";
    } else if (values.phonenumber.length <= 10) {
      error.phonenumber = "enter valid number";
    }
    return error;
  };
  const formik = useFormik({
    initialValues: {
      Firstname: "",
      Lastname: "",
      password: "",
      email: "",
      phonenumber: "",
    },
    validate,
    onSubmit: (values) => {
      JSON.stringify(values);
    },
  });
  console.log(formik.values, "values");
  return (
    <div className={styles.input}>
      <h1>hello</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* <h3>firstname</h3> */}
        <input
          id="Firstname"
          onChange={formik.handleChange}
          type="text"
          placeholder="text"
          value={formik.values.Firstname}
        />
        {formik.errors.Firstname ? <p>{formik.errors.Firstname}</p> : null}
        {/* <h3>LastName</h3> */}
        <input
          id="Lastname"
          onChange={formik.handleChange}
          type="text"
          placeholder="text"
          value={formik.values.Lastname}
        />
        {formik.errors.Lastname ? <p>{formik.errors.Lastname}</p> : null}
        {/* <h3>Phone Number</h3> */}
        <input
          id="phonenumber"
          onChange={formik.handleChange}
          type="number"
          placeholder="phonenumber"
          value={formik.values.phonenumber}
        />
        {formik.errors.phonenumber ? <p>{formik.errors.phonenumber}</p> : null}
        {/* <h3>Password</h3> */}
        <input
          id="password"
          onChange={formik.handleChange}
          type="password"
          placeholder="password"
          value={formik.values.password}
        />
        {formik.errors.password ? <p>{formik.errors.password}</p> : null}
        {/* <h3>email</h3> */}
        <input
          id="email"
          onChange={formik.handleChange}
          type="email"
          placeholder="email"
          values={formik.values.email}
        />
        {formik.errors.email ? <p>{formik.errors.email}</p> : null}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
