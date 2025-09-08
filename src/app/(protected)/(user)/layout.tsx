"use client";
import React from "react";
import { Sidebar_desktop } from "@/components/ui/custom/sidebar-desktop";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <div className="flex justify-baseline items-start">
        <Sidebar_desktop />
        <main className="flex-1 overflow-y-auto screen-layout">{children}</main>
      </div>
    </div>
  );
};

export default ProfileLayout;
