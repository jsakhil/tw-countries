import { useNavigate } from "react-router-dom";
import { Login } from "../../components/organisms";

const LoginPage = () => {
  const navigate = useNavigate();

  const onSuccess = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  return <Login bannerImage="/images/login-banner.png" onSuccess={onSuccess} />;
};

export default LoginPage;
