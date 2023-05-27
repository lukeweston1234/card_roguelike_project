import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex h-[90px] w-screen flex-row bg-slate-400">
        <h2>Header</h2>
      </div>
      <div className="m-8 flex h-auto w-auto flex-row justify-around">
        {children}
      </div>
    </div>
  );
}
