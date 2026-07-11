import { ComponentPropsWithoutRef } from "react";

type TextFieldProps = ComponentPropsWithoutRef<"input"> & {
  label?: string;
};

const TextField = ({
  label,
  id,
  name,
  value,
  ...props
}: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-y-1">
      <label className="text_label" htmlFor={id}>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        {...props}
        className="text_input"
      />
    </div>
  );
};
export default TextField;
