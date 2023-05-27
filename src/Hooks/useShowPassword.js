import { useState } from "react";

export const useShowPassword = () => {
  const [showPass, setShowPass] = useState(false);

  const togglePassword = () => setShowPass(!showPass);

  return { showPass, togglePassword };
};
