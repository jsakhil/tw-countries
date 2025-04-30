import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { cn } from "../../utils/cn";
import { HEADER_NAV_ITEMS, SOCIAL_LINKS } from "../../constants/nav";
import { LogoutButton, SocialIcon } from "../atoms";
import { useEffect, useState } from "react";
import menuIcon from "../../../public/images/icons-png/menu.png";

export const MainLayout = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-gray-800">
      <header className="bg-white">
        <div className="container mx-auto px-4 py-10 mb-5 flex justify-between items-center">
          <NavLink to="/"><h1 className="font-noto text-[24px] font-bold text-[#3D3D3D]">Countries</h1></NavLink>

          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <img src={menuIcon} alt="menu icon" className="h-6 w-6" />
          </button>

          <div className="hidden lg:flex gap-4 items-center">
            <nav className="nav-main font-noto flex items-center gap-5 text-[#8B8B8B] font-semibold text-[16px]">
              {HEADER_NAV_ITEMS.map(({ label, route }) => (
                <NavLink
                  key={label}
                  to={route}
                  className={({ isActive }) =>
                    cn("hover:text-[#587FFF] text-[16px] pr-6 relative", {
                      " text-[#3D3D3D] text-[16px] pr-6 relative": isActive,
                    })
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
            <LogoutButton />
          </div>
        </div>

        {menuOpen && (
          <div className="container mx-auto lg:hidden px-4 pb-4">
            <nav className="flex flex-col gap-2 font-noto text-[#8B8B8B] font-semibold text-[16px]">
              {HEADER_NAV_ITEMS.map(({ label, route }) => (
                <NavLink
                  key={label}
                  to={route}
                  className={({ isActive }) =>
                    cn("hover:text-[#587FFF]", {
                      "text-[#3D3D3D]": isActive,
                    })
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-4">
              <LogoutButton />
            </div>
          </div>
        )}

      </header>

      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>

      <footer className="bg-white pt-[120px] pb-[250px]">
        <div className="container mx-auto text-center space-y-4">
          <div className="flex justify-center gap-4 mb-[45px]">
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
          <div className="font-noto font-bold text-[13px] text-[#3D3D3D]">Example@email.com</div>
          <div className="font-noto font-bold text-[13px] text-[#3D3D3D]">
            Copyright © 2020 Name. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
