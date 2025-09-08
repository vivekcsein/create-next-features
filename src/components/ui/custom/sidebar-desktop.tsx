"use client";
import clsx from "clsx";
import { useState } from "react";
import Lucid_Icon from "@/components/ui/helper/Lucid_Icon";
import { LayoutDashboard, ChevronLeft, ChevronRight } from "lucide-react";
import { UserDropdown } from "./user-dropdown";

interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}

const sidebarItems: SidebarItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "LayoutDashboard",
    active: true,
  },
  { id: "users", label: "Users", icon: "Users" },
  { id: "analytics", label: "Analytics", icon: "ChartColumn" },
  { id: "documents", label: "Documents", icon: "FileText" },
  { id: "calendar", label: "Calendar", icon: "Calendar" },
  { id: "settings", label: "Settings", icon: "Settings" },
];

export function Sidebar_desktop() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`screen-layout bg-background flex flex-col border-r border-border transition-all duration-300 ease-smooth ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <LayoutDashboard className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="text-lg font-semibold">Dashboard</div>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 cursor-pointer rounded-lg text-muted hover:bg-primary hover:text-muted-foreground transition-all duration-200 ease-smooth"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div
        className={clsx(
          "flex-1 p-4 overflow-y-auto overflow-x-hidden",
          isCollapsed
            ? " scrollbar-hide scroll-smooth"
            : " scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent"
        )}
      >
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            return (
              <button
                key={item.id}
                className={`cursor-pointer w-full flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 ease-smooth group relative ${
                  isCollapsed ? "justify-center" : "space-x-4"
                } ${
                  item.active
                    ? "bg-dashboard-sidebar-active text-muted shadow-sm"
                    : "text-muted-foreground hover:bg-primary hover:text-muted"
                }`}
              >
                <Lucid_Icon
                  iconName={item.icon}
                  className="w-5 h-5 flex-shrink-0"
                />
                {!isCollapsed && (
                  <span className="font-medium text-sm">{item.label}</span>
                )}
                {/* {isCollapsed && (
                  <div className="absolute -left-full -top-1/4 ml-2 px-2 py-1 bg-primary border border-border rounded-md text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-smooth pointer-events-none z-100 whitespace-nowrap">
                    {item.label}
                  </div>
                )} */}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Static User Profile Section */}
      <div className="p-4 border-t border-border">
        <UserDropdown isCollapsed={isCollapsed} />
      </div>
    </div>
  );
}
