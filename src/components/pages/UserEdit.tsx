import React from "react";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import UserServiceImpl from "../../services/userModel/UserServiceImpl";
import User from "../../services/userModel/model/User";
import { useHistory } from "react-router-dom";

export default function UserEdit() {
  const userServiceImpl = new UserServiceImpl();
  const history = useHistory();

  const formSchema = yup.object({
    vorname: yup.string().max(20).required("Geben Sie Ihren Vornamen ein"),
    stasse: yup.string().max(100).required("Geben Sie Ihre Strasse ein"),
    name: yup.string().max(20).required("Geben Sie Ihren Nachnamen ein"),
    plz: yup
      .number()
      .max(9999, "Max 4 Zeichen")
      .min(1000)
      .required("Geben Sie Ihre PLZ ein"),
    ort: yup.string().max(30).required("Geben Sie Ihre Ortschaft ein")
  });

  return (
    <Formik
      initialValues={{
        id: "",
        name: "",
        vorname: "",
        strasse: "",
        plz: "",
        ort: "",
      }}
      validationSchema={formSchema}
      onSubmit={(values: User) => {
        console.log("test");
        userServiceImpl.addUser(
          values.vorname,
          values.name,
          values.strasse,
          values.plz,
          values.ort
        );
        history.push("/");
       // setSubmitting(false);
      }}
    >
      {({ touched, errors }) => (
        <div className="pt-5 row">
          <div className="col-2" />
          <div className="col">
            <Form>
              {/*  */}
              <div className="mb-3">
                <label className="form-label">Vorname</label>
                <Field
                  type="text"
                  name="vorname"
                  className={`form-control ${
                    touched.vorname && errors.vorname ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="vorname"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              {/*  */}
              <div className="mb-3">
                <label className="form-label">Nachname</label>
                <Field
                  type="text"
                  name="name"
                  className={`form-control ${
                    touched.name && errors.name ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              {/*  */}
              <div className="mb-3">
                <label className="form-label">Strasse</label>
                <Field
                  type="text"
                  name="strasse"
                  className={`form-control ${
                    touched.strasse && errors.strasse ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="strasse"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              {/*  */}
              <div className="mb-3">
                <label className="form-label">PLZ</label>
                <Field
                  type="number"
                  name="plz"
                  className={`form-control ${
                    touched.plz && errors.plz ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="plz"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              {/*  */}
              <div className="mb-3">
                <label className="form-label">Ortschaft</label>
                <Field
                  type="text"
                  name="ort"
                  className={`form-control ${
                    touched.ort && errors.ort ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="ort"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              {/*  */}
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit">
                  senden
                </button>
              </div>
            </Form>
          </div>
          <div className="col-2" />
        </div>
      )}
    </Formik>
  );
}
