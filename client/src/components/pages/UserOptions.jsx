import React, { Fragment, useState } from "react";
//import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const UserOptions = ({ user }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const [open, setOpen] = useState(false);
  //const history = useHistory();
  const dispatch = useDispatch();

  const options = () => {
    if (user.role === "admin") {
      options.unshift({
        name: "Dashboard",
        func: dashboard,
      });
    }

    /*     function dashboard() {
      history.push("/admin/dashboard");
    }

    function orders() {
      history.push("/orders");
    }
    function account() {
      history.push("/account");
    }
    function cart() {
      history.push("/cart");
    }
    function logoutUser() {
      dispatch(logout());
      alert.success("Logout Successfully");
    }
 */
    return <Fragment></Fragment>;
  };
};

export default UserOptions;
