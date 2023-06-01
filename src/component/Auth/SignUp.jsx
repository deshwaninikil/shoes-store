import "./Auth.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { useShowPassword } from "../../Hooks/useShowPassword";
import { Loader } from "../Loader/Loader";

export const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, signUpHandler, authError, loading } = useAuth();
  const { showPass, togglePassword } = useShowPassword();
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    signUpHandler(
      signUpForm.firstName,
      signUpForm.lastName,
      signUpForm.email,
      signUpForm.password
    );
  };
  useEffect(() => {
    if (token) {
      navigate(location?.state?.from.pathname || "/", { replace: true });
    }
  });
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="dp_row justifycenter aligncenter  auth_section">
          <div className="dp_row justifycenter aligncenter dp_rowdir_clmn auth_container">
            <div className="auth_title">
              <h2 className="heading">Sign Up</h2>
            </div>

            <form className="auth_form" onSubmit={onSubmitHandler}>
              <div className="auth_body">
                <div className="auth_items">
                  <div className="input_group">
                    <label className="input_label">First Name</label>
                    <input
                      type="text"
                      className="input_txt"
                      onChange={(e) =>
                        setSignUpForm({
                          ...signUpForm,
                          firstName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="auth_items">
                  <div className="input_group">
                    <label className="input_label">Last Name</label>
                    <input
                      type="text"
                      className="input_txt"
                      onChange={(e) =>
                        setSignUpForm({
                          ...signUpForm,
                          lastName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="auth_items">
                  <div className="input_group">
                    <label className="input_label">Email</label>
                    <input
                      type="email"
                      className="input_txt"
                      onChange={(e) =>
                        setSignUpForm({ ...signUpForm, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="auth_items">
                  <div className="input_group password-div">
                    <label className="input_label">Password</label>
                    <input
                      type={`${showPass ? "text" : "password"}`}
                      className="input_txt"
                      onChange={(e) =>
                        setSignUpForm({
                          ...signUpForm,
                          password: e.target.value,
                        })
                      }
                      required
                    />
                    <span className="password-icon" onClick={togglePassword}>
                      <i
                        className={`fa-solid ${
                          showPass ? "fa-eye " : "fa-eye-slash"
                        }`}
                      ></i>
                    </span>
                  </div>
                </div>
                {authError.length > 0 && (
                  <div className="auth-error">{authError}</div>
                )}
                <div className="auth_items">
                  <button className="btn">Sign up</button>
                </div>
                <div className="auth_items signup_item">
                  Already have an account?
                  <Link to="/login" className="auth_llnk">
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};
