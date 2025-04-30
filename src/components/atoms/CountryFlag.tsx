export const CountryFlag = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    className="w-[48px] md:w-[128px] h-[46px] md:h-[96px] object-cover border bg-gray-100"
    loading="lazy"
  />
);
