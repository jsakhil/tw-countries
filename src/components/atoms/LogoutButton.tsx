import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";

export const LogoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full px-6 py-2 bg-[#3C3C3C] text-white hover:bg-[#587FFF] transition"
    >
      Logout
    </button>
  );
};
