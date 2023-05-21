import axios from "axios";

export const loginService = async ({ email, password }) => {
  return await axios.post("/api/auth/login", {
    email,
    password,
  });
};

export const singupService = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  return await axios.post("/api/auth/signup", {
    firstName,
    lastName,
    email,
    password,
  });
};
