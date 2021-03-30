import React from "react";

export default function NavbarBrands({ children }) {
  return (

      <a className="text-cyan-50 text-base font-bold cursor-pointer hover:bg-teal-500 rounded-lg px-4 py-2">
        {children}
      </a>

  );
}
