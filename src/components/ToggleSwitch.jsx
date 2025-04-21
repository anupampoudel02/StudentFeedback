"use client";
import React from "react";
import './review.css';

const ToggleSwitch = ({ isOn, onToggle, id, className = "" }) => {
  return (
    <button
      id={id}
      className={`relative rounded-3xl transition-all cursor-pointer duration-[0.2s] ease-[ease-in-out] h-[23px] w-[45px] ${className}`}
      onClick={onToggle}
      style={{
        background: isOn ? "#000" : "#D9D9D9",
      }}
      role="switch"
      aria-checked={isOn}
    >
      <span
        className="absolute rounded-3xl shadow-sm transition-all duration-[0.2s] ease-[ease-in-out] h-[18px] top-[2.5px] w-[18px]"
        style={{
          background: isOn ? "#FFF" : "#000",
          left: isOn ? "25px" : "2px",
        }}
      />
    </button>
  );
};

export default ToggleSwitch;
