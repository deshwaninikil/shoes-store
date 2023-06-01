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
    try {
      setLoading(true);
      const { data, status } = await loginService({
        email,
        password,
      });
      setLoading(false);
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
    } catch (error) {
      console.error(error);

      setAuthError("The credentials you entered are invalid");
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("loginDetails");
    setToken("");
    setLoginUser("");
    navigate("/");
  };

  const signUpHandler = async (firstName, lastName, email, password) => {
    try {
      setLoading(true);
      const { data, status } = await singupService({
        firstName,
        lastName,
        email,
        password,
      });
      setLoading(false);
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
    } catch (error) {
      console.error(error);
      setAuthError("Email Already Exists.");
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
