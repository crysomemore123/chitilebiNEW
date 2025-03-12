import React from "react";

function NavText({ children }: { children: React.ReactNode }) {
  return (
    <p className="border-b-[3px] border-transparent transition duration-300 hover:border-b-yellow-400 block p-4">
      {children}
    </p>
  );
}

export default NavText;
