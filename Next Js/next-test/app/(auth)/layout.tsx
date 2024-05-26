import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Home({ children }: Props) {
  return (
    <>
      <div className="border-b p-1 text-center">20% off to the next 3 days</div>
      {children}
    </>
  );
}
