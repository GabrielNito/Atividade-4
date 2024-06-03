import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: InputProps) => {
  return (
    <input
      className="placeholder-red-300 text-red-500 border w-fit py-1 px-2 rounded-md"
      {...rest}
    />
  );
};

export default Input;
