import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Navbar = ({ setShowLogin }) => {
  const [mode, setMode] = useState("light");

  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     // document.body.style.backgroundColor = "rgb(17,24,39)";
  //     document.body.style.backgroundColor = "#212529";
  //     document.body.style.color = "white";
  //   } else{
  //     setMode("light");
  //     document.body.style.color = "black";
  //     document.body.style.backgroundColor = "white";
  //   }
  // };

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} alt="" className="logo" />
        </Link>
        <ul className="navbar-menu">
          {/* If the condition menu === "home" evaluates to true, the string "active" is returned, which will apply the "active" CSS class. If the condition is false, an empty string is returned, resulting in no additional class being applied */}
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            menu
          </a>
          <a
            href="#app-download"
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            mobile-app
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            contact us
          </a>
        </ul>
        <div className="navbar-right">
          {/* <div className="toggle">
            {mode === "light" ? (
              <button className=".light" onClick={toggleMode}>
                <CiLight />
              </button>
            ) : (
              <button className=".dark" onClick={toggleMode}>
                <MdOutlineDarkMode />
              </button>
            )}
          </div> */}
          <img src={assets.search_icon} alt="" />

          <div className="navbar-search-icon">
            <Link to="/cart">
              {" "}
              <img src={assets.basket_icon} alt="" />{" "}
            </Link>
            <div className={getTotalCartAmount() === 0 ? " " : "dot"}></div>
          </div>
          {!token ? (
            <button onClick={() => setShowLogin(true)}>sign in</button>
          ) : (
            <div className="navbar-profile">
              <img src={assets.profile_icon} alt="" />
              <ul className="nav-profile-dropdown">
                <li onClick={()=>navigate("/myorders")}>
                  <img src={assets.bag_icon} alt="" />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={logOut}>
                  <img src={assets.logout_icon} alt="" />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
