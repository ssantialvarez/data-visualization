import React from "react";

interface ButtonProps {
  ref?: (node?: Element | null) => void;
  onClick?: () => void;
  title: string;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, title, disabled, ref }) => {
    
    return (
        <button
            ref={ref}
            onClick={onClick}
            disabled={disabled}
            className="px-4 py-2 bg-dodger-blue text-snow font-semibold rounded-lg shadow-md hover:bg-midnight-blue transition disabled:bg-gray-400"
          >
            {title}
          </button>
    );
};

export default Button;
