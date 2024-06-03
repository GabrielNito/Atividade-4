import { HTMLAttributes } from "react";

interface SeparatorProps extends HTMLAttributes<HTMLSpanElement> {}

const Separator = ({ ...rest }: SeparatorProps) => {
  return <span className="mt-2 bg-black h-[1px] w-full" {...rest} />;
};

export default Separator;
