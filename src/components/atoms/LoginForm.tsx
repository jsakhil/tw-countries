import { useState } from "react";
import { SocialIcon, TextInput } from "../atoms";
import { SOCIAL_LINKS } from "../../constants/nav";
import { LoginProps } from "../../types/login";

export const LoginForm = ({ onSuccess }: Pick<LoginProps, "onSuccess">) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (value: string) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    return regex.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email?.trim() || !password?.trim()) {
      setError("Email and password are required.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be 8+ chars, include 1 capital, 1 number, and 1 symbol."
      );
      return;
    }

    setError("");
    onSuccess({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-[280px] w-full">
      <h2 className="font-noto text-[32px] font-bold text-[#3D3D3D] text-center md:text-left">Sign In</h2>
      <p className="font-noto text-[16px] font-bold text-sm text-[#3D3D3D] !mb-[35px] text-center md:text-left">
        New user?{" "}
        <a href="#" className="text-[#587FFF] hover:text-[#3D3D3D] transition">
          Create an account
        </a>
      </p>

      <TextInput
        label=""
        placeholder="Username or email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        label=""
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" className="w-[32px] h-[32px] outline-[2px] outline-black rounded-none focus:ring-0 focus:ring-[#000]" style={{outlineStyle: "solid", outlineOffset: "-2px"}}/> Keep me signed in
      </label>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="w-full px-6 py-2 bg-[#3C3C3C] text-white hover:bg-[#587FFF] transition"
      >
        Sign In
      </button>

      <div className="text-center text-sm text-muted relative !mt-[35px]">
        <hr className="absolute w-full top-1/2 border-[1px] border-[#CFCFCF]" />
        <span className="bg-white relative px-5 font-noto font-bold text-[#3D3D3D]">Or Sign In With</span>
      </div>

      <div className="flex justify-center gap-3 !mt-[30px]">
        {SOCIAL_LINKS.map(({ label, href, iconClass, iconImage }) => (
          <SocialIcon
            key={label}
            iconClass={iconClass}
            iconImage={iconImage}
            ariaLabel={label}
            href={href}
          />
        ))}
      </div>
    </form>
  );
};
