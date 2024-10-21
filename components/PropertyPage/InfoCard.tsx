import React from "react";

function InfoCard({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-3 rounded-lg bg-white p-10">{children}</div>;
}

export default InfoCard;
