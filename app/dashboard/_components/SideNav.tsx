"use client";
import { FileClock, Home, WalletCards, Settings } from "lucide-react";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const SideNav = () => {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();

  return (
    <div className="h-screen relative p-5 shadow-md border bg-white">
      <div className="flex justify-center">
        <Image src="/logo1.svg" alt="logo" width={120} height={100} />
      </div>
      <hr className="my-6 border" />
      <div className="mt-3">
        {MenuList.map((item, index) => (
          <Link href={item.path}>
            <div
              className={`flex gap-2 mb-2 p-3
                    hover:bg-primary hover:text-white rounded-lg
                    cursor-pointer items-center
                    ${path == item.path && "bg-primary text-white"}
                    `}
            >
              <item.icon className="h-6 w-6" />
              <h2 className="text-lg">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <p>Usagetrack</p>
      </div>
    </div>
  );
};

export default SideNav;
