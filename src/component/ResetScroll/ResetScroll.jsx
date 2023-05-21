import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const ResetScroll = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};
