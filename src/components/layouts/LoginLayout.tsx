import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const LoginLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="login-layout">
      <Outlet />
    </div>
  );
};
