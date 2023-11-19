"use client";

import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  color: string;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, color }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`rounded-3xl px-5 py-2 text-sm font-semibold outline ${
          color === "blue" && "bg-blue-500 border-blue-100 text-white"
        }
        ${color === "white" && "bg-blue-50 border-black text-blue-500"}`}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
