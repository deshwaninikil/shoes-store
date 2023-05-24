import "./UserAvatar.css";
import { useAuth } from "../../context/AuthContext";
export const UserAvatar = () => {
  const { loginUser } = useAuth();
  const firstNameInitial = loginUser?.firstName[0];
  const lastNameInitial = loginUser?.lastName[0];

  const userInitials = firstNameInitial + lastNameInitial;

  return <span className="avatar">{userInitials}</span>;
};
