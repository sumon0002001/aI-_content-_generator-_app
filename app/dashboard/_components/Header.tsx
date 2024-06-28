import { UserButton } from "@clerk/nextjs";
import { SearchIcon } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 shadow-md border-b-2 bg-white flex justify-between items-center">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white">
        <SearchIcon />
        <input type="text" placeholder="Search...." className="outline-none" />
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="bg-primary p-1 rounded-full text-sm text-white px-2">
          🔥 Join Membership just for $1.99/Month
        </h2>
        <UserButton/>
      </div>
    </div>
  );
};

export default Header;
