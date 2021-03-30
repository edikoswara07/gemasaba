import React from "react";

export default function Navbar({ children }) {
  return (
    <div className="flex flow-row justify-between items-center py-3 px-4 bg-teal-700 xs:flex-col xs:px-2 xs:space-y-2 p-0">
      {children}
    </div>
  );
}
