import { Link } from "react-router-dom";
import page404 from "../../assets/page404.png";

import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="dp_row dp_rowdir_clmn aligncenter justifycenter pdngtb5 notFound-container">
      <img src={page404} alt="404error" />
      <p className="commanpara">
        404 error: The requested URL was not found on this server.
      </p>
      <Link to="/" className="btn logout-btn">
        Go to Home
      </Link>
    </div>
  );
};

export { PageNotFound };
