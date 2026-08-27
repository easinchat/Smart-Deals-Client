// import React, { use } from "react";
// import { AuthContext } from "../../Context/AuthContext";
// import { Navigate, useLocation } from "react-router";

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = use(AuthContext);
//   const loaction = useLocation();

//   console.log(location);

//   if (loading) {
//     return <p className="loading loading-spinner text-success">Loading...</p>;
//   }
//   if (user) {
//     return children;
//   }
//   return <Navigate state={loaction?.pathname} to={"/register"}></Navigate>;
// };

// export default PrivateRoute;
import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return <p className="loading loading-spinner text-success">Loading...</p>;
  }
  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to={"/register"}></Navigate>;
};

export default PrivateRoute;
