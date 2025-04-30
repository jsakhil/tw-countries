import { LoginProps } from "../../types/login";
import { LoginForm } from "../atoms";

export const Login = ({ bannerImage, onSuccess }: LoginProps) => {
  return (
    <div className="font-noto grid grid-cols-1 md:grid-cols-2 min-h-screen items-center px-8  bg-white">
      <div className="flex justify-center">
        <LoginForm onSuccess={onSuccess} />
      </div>

      <div className="hidden md:flex justify-center items-center">
        <img
          src={bannerImage}
          alt="Login Banner"
          className="w-auto h-auto max-h-[510px] object-contain"
        />
      </div>
    </div>
  );
};
