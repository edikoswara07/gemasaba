import React from "react";

export default function Layout({ children }) {
  return (
    <div className="bg-bluegray-50">
      <main>{children}</main>
    </div>
  );
}
