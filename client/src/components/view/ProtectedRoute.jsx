import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <Fragment>
      <Route
        {...rest}
        render={(props) => {
          if (isAuthenticated === false) {
            return <Navigate to="/login" />;
          }

          if (isAdmin === true && user.role !== "admin") {
            return <Navigate to="/login" />;
          }

          return <Component {...props} />;
        }}
      />
    </Fragment>
  );
};

export default ProtectedRoute;
