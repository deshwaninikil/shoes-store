import { useAuth } from "../../context/AuthContext";
import "./Auth.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useShowPassword } from "../../Hooks/useShowPassword";
import { Loader } from "../Loader/Loader";

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, loginHandler, authError, loading } = useAuth();
  const [loginCred, setLoginCred] = useState({ email: "", password: "" });

  const guestLoginCred = {
    email: "nikhil@gmail.com",
    password: "nikhik@1995",
  };

  const { showPass, togglePassword } = useShowPassword();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(loginCred.email, loginCred.password);
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
              <h2 className="heading">Login</h2>
            </div>
            <form className="auth_form" onSubmit={onSubmitHandler}>
              <div className="auth_body">
                <div className="auth_items">
                  <div className="input_group">
                    <label className="input_label">Email Address</label>
                    <input
                      type="text"
                      className="input_txt"
                      value={loginCred.email}
                      onChange={(e) =>
                        setLoginCred({ ...loginCred, email: e.target.value })
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
                      value={loginCred.password}
                      onChange={(e) =>
                        setLoginCred({ ...loginCred, password: e.target.value })
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
                <div className="auth_items action_btn">
                  <button type="submit" className="btn">
                    Login
                  </button>
                  <button
                    type="submit"
                    className="btn"
                    onClick={(e) => {
                      setLoginCred({
                        email: guestLoginCred.email,
                        password: guestLoginCred.password,
                      });
                    }}
                  >
                    Login as Guest User
                  </button>
                </div>
                <div className="auth_items signup_item">
                  Need an account?
                  <Link to="/signup" className="auth_llnk">
                    Sign Up
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
