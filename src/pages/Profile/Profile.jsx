import { UserAvatar } from "../../component/UserAvatar/UserAvatar";
import { useAuth } from "../../context/AuthContext";
import "./Profile.css";
export const Profile = () => {
  const { loginUser, logoutHandler } = useAuth();
  return (
    <>
      <section className="profile-section pdngtb5">
        <div className="dp_row dp_rowdir_clmn profile-container ">
          <div className="profile-header align">
            <h3>Profile</h3>
          </div>
          <div className="border-bottom"></div>
          <div className="dp_row profile-body">
            <UserAvatar />
            <div className="dp_row dp_rowdir_clmn profile-details">
              <div className="dp_row profile-item">
                <span className="font-bold">Name :</span>
                <span className="">
                  {loginUser.firstName} {loginUser.lastName}
                </span>
              </div>
              <div className="dp_row profile-item">
                <span className="font-bold">Email :</span>
                <span>{loginUser.email}</span>
              </div>
            </div>
          </div>
          <button
            className="btn primary-btn-solid font-bold logout-btn"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      </section>
    </>
  );
};
