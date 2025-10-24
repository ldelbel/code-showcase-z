import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputFieldProps = {
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  error?: string;
  className?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  register?: UseFormRegisterReturn;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  error,
  inputProps = {},
  register,
}) => {
  return (
    <div className="input-container relative">
      <input
        required
        {...inputProps}
        type={type}
        name="text"
        className={`input-field peer ${error ? 'ring-2 ring-red-500' : ''}`}
        {...register}
      />
      <label className="input-label peer-valid:translate-y-[-35px] peer-valid:left-[0.5px] peer-focus:translate-y-[-35px] peer-focus:left-[0.5px] font-bold text-shadow text-whitesmoke opacity-90">
        {label}
      </label>
      {error && (
        <p className="text-red-500 text-xs absolute -bottom-5 right-0">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
