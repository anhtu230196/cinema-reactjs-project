import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: PrivatePage, ...props }) {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  if (!user) {
    alert("Vui lòng đăng nhập");
    return <Redirect to='/' exact />;
  }
  return <Route {...props} component={PrivatePage} />;
}

export default PrivateRoute;
