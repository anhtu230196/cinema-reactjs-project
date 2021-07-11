import React from "react";
import { Redirect, Route } from "react-router-dom";
import swal from "sweetalert";

function PrivateRoute({ component: PrivatePage, ...props }) {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  if (!user) {
    swal("Vui lòng đăng nhập");
    return <Redirect to='/' exact />;
  }
  return <Route {...props} component={PrivatePage} />;
}

export default PrivateRoute;
