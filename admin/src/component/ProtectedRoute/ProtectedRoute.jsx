import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const ProtectedRoute = ({ children }) => {
  const { token, admin } = useContext(StoreContext);

  if (!token || !admin) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
