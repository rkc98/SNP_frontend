import { useContext } from "react";
import { Link } from "react-router-dom";
import "./TopBarNavigation.css";
import AuthContext from "../../context/auth-context";

const TopBarNavigation = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark  bg-primary">
      <div className="container">
        <span className="navbar-brand logo">ShopNPay</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto w-100 justify-content-center">
            <li className="nav-item active">
              <Link className="nav-link" to="/admin">
                <i className="fas fa-user-tie"></i>
                Admin
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/userCategoryCreate">
                <i className="fa fa-users"></i>
                User Category
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/userCreate">
                <i className="fas fa-user-check"></i>
                User Register
              </Link>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              {/* <a className="nav-link" onClick={authCtx.onLogout}>
                <i className="fa fa-sign-out"></i>Logout
              </a> */}
              <Link className="nav-link" to="/">
                <i className="fa fa-sign-out"></i>Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopBarNavigation;
