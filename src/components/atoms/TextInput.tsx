interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TextInput = ({ label, ...props }: TextInputProps) => (
  <label className="block text-sm font-medium text-gray-700 mb-2">
    {label}
    <input
      {...props}
      className="w-full h-[48px] px-3 py-2 mt-1 font-noto font-semibold text-[#3E3E3E] !border-[#3E3E3E] border-2 focus:border-[#3E3E3E] placeholder-[#3E3E3E] focus-visible:radius-[0px] focus-visible:outline-none"
    />
  </label>
);
