import React, { Fragment, useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../actions/userAction";
import "../../Styles/login.css";
import Header from "../view/Header";
import Pacman from "../../assets/pac.png";

const LoginAndRegister = ({ history }) => {
  const navigate = useNavigate();
  document.title = "IneedIT Login & registration";
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.user);

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const { firstName, email, password } = user;
  console.log(user);

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("firstName", firstName);
    myForm.set("email", email);
    myForm.set("password", password);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [dispatch, isAuthenticated]);

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="LoginSignUpMain">
        <div className="LoginSignUpContainer">
          <div className="login_box">
            <p>LOGIN</p>
            <form className="loginForm" onSubmit={loginSubmit}>
              <div>
                <input
                  className="loginEmail"
                  type="email"
                  placeholder="Email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="loginPassword"
                  type="password"
                  placeholder="Password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <Link className="forgotP" to="/password/forgot">
                Forgot Password ?
              </Link>
              <input type="submit" value="Login" className="loginBtn" />
            </form>
          </div>

          <div className="signUp_box">
            <p>REGISTER</p>
            <form
              className="signUpForm"
              ref={registerTab}
              encType="multipart/form-data"
              onSubmit={registerSubmit}
            >
              <div>
                <input
                  className="signUpName"
                  type="text"
                  placeholder="First Name"
                  required
                  name="firstName"
                  value={firstName}
                  onChange={registerDataChange}
                />
              </div>
              <div>
                <input
                  className="signUpEmail"
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  onChange={registerDataChange}
                />
              </div>
              <div>
                <input
                  className="signUpPassword"
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                  value={password}
                  onChange={registerDataChange}
                />
              </div>

              <input type="submit" value="Register" className="signUpBtn" />
            </form>
          </div>
          <img className="pacman_login" src={Pacman} alt="pacman" />
        </div>
        <div className="stars"></div>
        <div className="twinkleMask"></div>
        <div className="twinkleMask2"></div>
      </div>
    </Fragment>
  );
};

export default LoginAndRegister;
