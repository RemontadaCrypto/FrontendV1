import React, { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const Input = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  disabled,
  placeholder,
  type = "text",
}) => {
  const [password, setPassword] = useState(true);
  return (
    <div className="input-field">
      {label && <label>{label}</label>}
      {type !== "password" ? (
        <div className="input">
          <input
            type={type}
            name={name && name}
            placeholder={placeholder}
            value={value}
            disabled={disabled && disabled}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
      ) : (
        <div className="input flex-ac-jb">
          <input
            type={password ? "password" : "text"}
            name={name && name}
            value={value}
            disabled={disabled && disabled}
            onChange={onChange}
            onBlur={onBlur}
          />
          {password ? (
            <RiEyeLine
              onClick={() => {
                setPassword(!password);
              }}
            />
          ) : (
            <RiEyeOffLine
              onClick={() => {
                setPassword(!password);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default Input;
