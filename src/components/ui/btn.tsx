import { ComponentPropsWithoutRef } from "react";

import clsx from "clsx";

type btnVariant = "primary" | "outline" | "warning";

type BtnProps = ComponentPropsWithoutRef<"button"> & {
  variant?: btnVariant;
};

const btnStyle: Record<btnVariant, string> = {
  primary: "btn--primary",
  outline: "btn--outline",
  warning: "btn--warning",
};

const Btn = ({
  variant = "primary",
  type = "button",
  children,
  className,
  ...props
}: BtnProps) => {

  
  const clasess = clsx(
    "btn", 
    { [btnStyle[variant]]: variant },
    className
  );

  return (
    <button className={clasess} type={type} {...props}>
      {children}
    </button>
  );
};
export default Btn;
