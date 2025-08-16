import React from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

const variantClasses = {
  filled: "bg-slate-100/70 border border-slate-200 focus:ring-2 focus:ring-indigo-400 focus:bg-white shadow-inner",
  outlined: "border border-slate-300 bg-transparent focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400",
  ghost: "border-b-2 border-slate-300 focus:border-violet-500 bg-transparent rounded-none focus:ring-0",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-sm font-semibold text-slate-700 tracking-wide">
          {label}
        </label>
      )}

      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          rounded-xl outline-none transition-all duration-300 ease-in-out
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${disabled ? "bg-slate-200 cursor-not-allowed text-slate-400" : ""}
          ${invalid ? "border-rose-500 focus:border-rose-500 focus:ring-rose-400" : ""}
        `}
      />

      {helperText && !errorMessage && (
        <span className="text-xs text-slate-500">{helperText}</span>
      )}
      {errorMessage && (
        <span className="text-xs text-rose-500 font-medium animate-pulse">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
