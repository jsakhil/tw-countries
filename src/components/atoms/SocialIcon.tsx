interface SocialIconProps {
  iconClass: string;
  iconImage: string;
  ariaLabel: string;
  href: string;
}

export const SocialIcon = ({ iconClass, iconImage, ariaLabel, href }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-[48px] h-[48px] rounded-full border-[2px] border-[#3E3E3E] flex items-center justify-center hover:bg-[#587FFF] transition"
    aria-label={ariaLabel}
  >
    <span className={`icon-png ${iconClass}`}>
      <img className="w-auto h-[20px]" src={iconImage} alt={iconClass} />
    </span>
  </a>
);
