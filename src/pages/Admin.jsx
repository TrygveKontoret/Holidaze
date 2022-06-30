import React from "react";
import { useContext } from "react";
import { AdminPage, Unauthorized } from "../components/admin/AdminPage";
import AuthContext from "../context/AuthContext";

const Admin = () => {
  const [auth, setAuth] = useContext(AuthContext);

  return <>{!auth ? <Unauthorized /> : <AdminPage />}</>;
};

export default Admin;
