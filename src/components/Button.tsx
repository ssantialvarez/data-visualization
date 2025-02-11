import React from "react";

interface ButtonProps {
  onClick?: () => void;
  title: string;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, title, disabled }) => {
    
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="px-4 py-2 bg-dodger-blue text-snow font-semibold rounded-lg shadow-md hover:bg-midnight-blue transition disabled:bg-gray-400"
          >
            {title}
          </button>
    );
};

export default Button;
