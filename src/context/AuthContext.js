import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService, singupService } from "../services/";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const loginDetails = JSON.parse(localStorage.getItem("loginDetails"));
  const [token, setToken] = useState(loginDetails?.token);
  const [loginUser, setLoginUser] = useState(loginDetails?.loginUser);
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);

  const loginHandler = async (email, password) => {
    setLoading(true);
    try {
      const { data, status } = await loginService({
        email,
        password,
      });

      if (status === 201 || status === 200) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({
            token: data.encodedToken,
            loginUser: data.foundUser,
          })
        );
        setLoginUser(data.foundUser);
        setToken(data.encodedToken);

        setAuthError("");
      }
      setLoading(false);
    } catch (error) {
      setAuthError("The credentials you entered are invalid");
      console.error(error);
      setLoading(false);
    }
  };

  const logoutHandler = () => {
    setLoading(true);
    localStorage.removeItem("loginDetails");
    setToken("");
    setLoginUser("");

    setTimeout(() => {
      navigate("/");
      setLoading(false);
    }, 1000);
  };

  const signUpHandler = async (firstName, lastName, email, password) => {
    setLoading(true);
    try {
      const { data, status } = await singupService({
        firstName,
        lastName,
        email,
        password,
      });

      if (status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({
            token: data.encodedToken,
            loginUser: data.createdUser,
          })
        );
        setToken(data.encodedToken);
        setLoginUser(data.createdUser);
        setAuthError("");
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setAuthError("Email Already Exists.");
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        loginUser,
        loginHandler,
        logoutHandler,
        signUpHandler,
        authError,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
