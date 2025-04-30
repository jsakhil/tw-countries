import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Login } from "../../components/organisms";
import { login } from "../../store/slices/authSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSuccess = () => {
    dispatch(login());
    navigate("/");
  };

  return <Login bannerImage="/images/login-banner.png" onSuccess={onSuccess} />;
};

export default LoginPage;
