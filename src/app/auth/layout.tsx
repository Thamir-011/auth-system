import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-neutral-900">
      {children}
    </div>
  );
};

export default layout;
