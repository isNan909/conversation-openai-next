import React from "react";

interface NavbarProps {
  heading: string
  subHeading: string
}

export const Navbar: React.FC<NavbarProps> = ({heading, subHeading}: NavbarProps) => {
  return (
    <div className="p-4 flex gap-3 items-center border-b">
      <h2 className="text-2xl font-bold text-center">{heading}</h2>
      <span className="text-gray-400">{subHeading}</span>
    </div>
  )
}
