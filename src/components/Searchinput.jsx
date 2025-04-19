"use client";
import React from "react";
import './review.css';

const SearchInput = ({
  value,
  onChange,
  placeholder = "Search",
  className = "",
}) => {
  return (
    <div
      className={`flex items-center px-5 py-2.5 bg-white rounded-xl border border-solid transition-all cursor-text border-neutral-500 duration-[0.2s] ease-[ease-in-out] ${className}`}
    >
      <input
        className="w-full text-lg text-black border-[none]"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <div>
        <svg
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="search-icon"
          style={{ width: "28px", height: "29px", fill: "#B8B8B8" }}
        >
          <path
            d="M11.0833 19.3333C8.96389 19.3333 7.17033 18.5729 5.70267 17.052C4.235 15.5311 3.50078 13.6735 3.5 11.4792C3.49922 9.28483 4.23344 7.42722 5.70267 5.90633C7.17189 4.38544 8.96544 3.625 11.0833 3.625C13.2012 3.625 14.9952 4.38544 16.4652 5.90633C17.9352 7.42722 18.669 9.28483 18.6667 11.4792C18.6667 12.3653 18.5306 13.201 18.2583 13.9865C17.9861 14.7719 17.6167 15.4667 17.15 16.0708L23.6833 22.8375C23.8972 23.059 24.0042 23.341 24.0042 23.6833C24.0042 24.0257 23.8972 24.3076 23.6833 24.5292C23.4694 24.7507 23.1972 24.8615 22.8667 24.8615C22.5361 24.8615 22.2639 24.7507 22.05 24.5292L15.5167 17.7625C14.9333 18.2458 14.2625 18.6285 13.5042 18.9104C12.7458 19.1924 11.9389 19.3333 11.0833 19.3333ZM11.0833 16.9167C12.5417 16.9167 13.7814 16.3882 14.8027 15.3313C15.8239 14.2744 16.3341 12.9904 16.3333 11.4792C16.3326 9.96794 15.8223 8.68429 14.8027 7.62821C13.783 6.57213 12.5432 6.04328 11.0833 6.04167C9.62344 6.04006 8.38406 6.5689 7.36517 7.62821C6.34628 8.68751 5.83567 9.97117 5.83333 11.4792C5.831 12.9872 6.34161 14.2712 7.36517 15.3313C8.38872 16.3914 9.62811 16.9199 11.0833 16.9167Z"
            fill="#B8B8B8"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchInput;
