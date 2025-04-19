import React from "react";
import './Auth.css';
const ModuleCard = ({ imageUrl, title, onClick, className = "" }) => {
  return (
    <article
      className={`overflow-hidden bg-white rounded-xl border-solid transition-all cursor-pointer border-[0.5px] border-stone-300 duration-[0.2s] ease-[ease-in-out] w-[363px] ${className}`}
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={title}
        className="object-cover w-full h-[193px]"
      />
      <h2 className="p-2.5 text-sm font-medium text-black">{title}</h2>
    </article>
  );
};

export default ModuleCard;
