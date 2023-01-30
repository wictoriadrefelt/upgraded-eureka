const LoginandRegister = () => {
  document.title = "IneedIT Login & registration";
  return <div>hej</div>;
};
export default LoginandRegister;

/* import React, { useRef, useState } from "react";
// import css
const LoginandRegister = () => {
const LoginandRegister = () => {
  const login = useRef(null);
  const register = useRef(null);
  const toggleTab = useRef(null);

  const { emailLogin, setEmailLogin } = useState("");
  const { loginPassword, setLoginPassword } = useState("");

  const { user, setUser } = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  /*   console.log(user);
  console.log(emailLogin, "hej");
  const { firstName, lastName, email, password } = user;
 
  const switchTabs = (e, tab) => {
    if (tab === "login") {
      toggleTab.current.classList.add("neutral--login");
      toggleTab.current.classList.remove("right--login");

      register.current.classList.remove("neutral--register");
      login.current.classList.remove("left--login");
    }
    if (tab === "register") {
      toggleTab.current.classList.add("neutral--login");
      toggleTab.current.classList.remove("right--login");

      register.current.classList.add("neutral--register");
      login.current.classList.add("left--login");
    }
  };

  const loginSubmit = () => {
    console.log("tjena");
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.set("firstName", firstName);
    form.set("lastName", lastName);
    form.set("email", email);
    form.set("password", password);
    console.log("sign up submitted");
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container--login">
      <div className="box--login">
        <div>
          <div className="toggle--loginSignup">
            <p onClick={(e) => switchTabs(e, "login")}>Login</p>
            <p onClick={(e) => switchTabs(e, "register")}>Register</p>
          </div>
          <button ref={toggleTab}></button>
        </div>
        <form className="form--login" ref={login} onSubmit={loginSubmit}>
          <div className="email--login">
            <input
              type="email"
              placeholder="Email"
              required
              value={emailLogin}
              onChange={(e) => setEmailLogin(e.target.value)}
            />
            <div className="password--login">
              <input
                type="password"
                placeholder="Password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Login" className="button--login" />
          </div>
        </form>
        <form
          className="form--register"
          ref={register}
          encType="multipart/form-data"
          onSubmit={registerSubmit}
        >
          <div className="firstName--register">
            <input
              type="text"
              placeholder="Firstname"
              required
              name="firstName"
              value={firstName}
              onChange={registerDataChange}
            />
          </div>
          <div className="lastName--register">
            <input
              type="text"
              placeholder="Lastname"
              required
              name="lastName"
              value={lastName}
              onChange={registerDataChange}
            />
          </div>
          <div className="email--register">
            <input
              type="text"
              placeholder="Email"
              required
              name="Email"
              value={email}
              onChange={registerDataChange}
            />
          </div>
          <div className="password--register">
            <input
              type="text"
              placeholder="Password"
              required
              name="Password"
              value={password}
              onChange={registerDataChange}
            />
          </div>
          <input
            className="button--register"
            type="submit"
            value="Register"
            disabled={loading ? true : false}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginandRegister;
 */
