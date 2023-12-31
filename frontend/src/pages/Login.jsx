import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  function handlelogin(data) {}

  const handleSubmit = (values, { setSubmitting }) => {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log(user);
          if (user.error) {
            alert("User does not exist!");
          } else {
            onLogin(user);
            navigate("/");
          }
        });
      }
    });
    setSubmitting(false);
  };

  return (
    <div className="card">
      <div className="card-header">Login</div>
      <div className="card-body">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="forms">
              <div className="input_fields">
                <label htmlFor="username" className="form-label">
                  Username:
                </label>
                <Field
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error"
                />
              </div>

              <div className="input_fields">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              <div className="form_message">
                <p>
                  Don't have an account?{" "}
                  <Link className="login_link" to="/login">
                    Sign Up Now!
                  </Link>
                </p>
              </div>

              <button type="submit" className="btn" disabled={isSubmitting}>
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
