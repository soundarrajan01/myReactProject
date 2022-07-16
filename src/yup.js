import React from "react";
import { Field, useFormik, Form } from "formik";
import * as Yup from "yup";
import styles from "./formik.module.css";
export default function Yub() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      password: "",
      email: "",
      phonenumber: "",
      pick: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().max(15, "15 char or less").required("required"),
      lastname: Yup.string().max(15, "15 char or less").required("required"),
      password: Yup.string().max(10, "10 char or less").required("required"),
      email: Yup.string().email("invalid email id").required("required"),
      phonenumber: Yup.string()
        // .max(10, "invalid number")
        .min(9, "invalid number")
        .required("required"),
    }),
    onSubmit: (values) => {
      JSON.stringify(values);
    },
  });
  console.log(formik.values, "vv");
  return (
    <div>
      <h1>hello</h1>
      <div className={styles.outerborder}>
        <form className={styles.formborder} onSubmit={formik.handleSubmit}>
          <h3>FIRSTNAME</h3>
          <input
            id="firstname"
            type="text"
            name="firstname"
            placeholder="name"
            value={formik.values.firstname}
            onChange={formik.handleChange}
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <p>{formik.errors.firstname}</p>
          ) : null}
          <h3>LASTNAME</h3>
          <input
            id="lastname"
            name="lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            type="text"
            placeholder="name"
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <p>{formik.errors.lastname}</p>
          ) : null}
          <h3>PASSWORD</h3>
          <input
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            placeholder="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
          {/* <Form>
            <div id="my-radio-group">pick</div>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="pick" value="male" />
              </label>
            </div>
          </Form> */}
          {/* <input type="radio" id="male" name="male" value="male" />
          <label for="male">male</label>
          <input type="radio" id="female" name="female" value="female" />
          <label for="female">female</label> */}
          <h3>EMAIL</h3>
          <input
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
            placeholder="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
          <h3>PHONE NUMBER</h3>
          <input
            name="phonenumber"
            id="phonenumber"
            value={formik.values.phonenumber}
            onChange={formik.handleChange}
            type="phonenumber"
            placeholder="phonenumber"
          />
          {formik.touched.phonenumber && formik.errors.phonenumber ? (
            <p>{formik.errors.phonenumber}</p>
          ) : null}
          <div className={styles.button}>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
