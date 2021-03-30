import React from "react";

export default function NavbarItems({ children }) {
  return (
    <a className="text-cyan-50 text-xs cursor-pointer hover:bg-teal-500 rounded-lg px-4 py-2">
      {children}
    </a>
  );
}
