import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, replace } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>; // Hoặc sử dụng một spinner để hiển thị
  }
  console.log(currentUser);
  if (currentUser) {
    return children;
  }
  return <Navigate to={"/login"} replace />;
};

export default PrivateRoute;
