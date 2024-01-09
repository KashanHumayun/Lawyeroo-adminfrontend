import React from 'react';

interface FieldWithIconProps {
  Icon: React.ComponentType;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
}

const FieldWithIcon: React.FC<FieldWithIconProps> = ({
  Icon,
  id,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) => (
  <div className="mb-4 flex items-center border-b border-purple-300 py-2">
    <span className="text-purple-500 mr-3">
      <Icon />
    </span>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
    />
  </div>
);

export default FieldWithIcon;
