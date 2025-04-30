import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
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
