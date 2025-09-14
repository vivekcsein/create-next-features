"use client";
import dynamic from "next/dynamic";
import React, { useCallback } from "react";
import { useSidebarDesktop } from "@/components/providers/SidebarDesktopProvider";

const Profile_User = dynamic(
  () => import("@/components/context/profile/Profile_User"),
  { ssr: false }
);
const Profile_orderPage = dynamic(
  () => import("@/components/context/profile/Profile_orderPage"),
  { ssr: false }
);

const ProfilePage = () => {
  const { activeItem } = useSidebarDesktop();

  const snippet = useCallback(() => {
    switch (activeItem?.id) {
      case "Profile":
        return <Profile_User />;

      case "Orders":
        return <Profile_orderPage />;

      default:
        return <div>{activeItem?.label}</div>;
    }
  }, [activeItem]);

  return <div className="flex-1 overflow-y-auto">{snippet()}</div>;
};

export default ProfilePage;
