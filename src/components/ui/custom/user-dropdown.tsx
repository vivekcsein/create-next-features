"use client";
import { useState, useRef, useEffect } from "react";
import { User, Settings, LogOut, CreditCard, HelpCircle } from "lucide-react";

interface UserDropdownProps {
  isCollapsed: boolean;
}

export function UserDropdown({ isCollapsed }: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const userMenuItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "help", label: "Help", icon: HelpCircle },
    { id: "logout", label: "Sign out", icon: LogOut, danger: true },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center px-3 py-2.5 rounded-lg
          text-muted-foreground hover:text-muted
          transition-all duration-200 ease-smooth
          group relative
          ${isCollapsed ? "justify-center hover:bg-none" : "space-x-4 hover:bg-primary"}
        `}
      >
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
          <User className="w-4 h-4 text-primary-foreground" />
        </div>

        {!isCollapsed && (
          <div className="flex-1 text-left min-w-0">
            <div className="text-sm font-medium text-muted truncate">
              John Doe
            </div>
            <div className="text-xs text-muted truncate">john@example.com</div>
          </div>
        )}

        {/* Tooltip for collapsed state */}
        {isCollapsed && (
          <div
            className="
            absolute left-full ml-2 px-2 py-1 
            bg-background border border-border
            rounded-md text-xs text-muted
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-200 ease-smooth
            pointer-events-none z-50 whitespace-nowrap
          "
          >
            John Doe
          </div>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`
          absolute bottom-full mb-2 ${isCollapsed ? "left-full ml-2" : "left-0 right-0"}
          bg-background border border-border
          rounded-lg shadow-xl py-2 z-50
          ${isCollapsed ? "w-48" : "w-full"}
          animate-in slide-in-from-bottom-2 duration-200
        `}
        >
          {/* User Info Header (only when collapsed) */}
          {isCollapsed && (
            <div className="px-3 py-2 border-b border-border">
              <div className="text-sm font-medium text-muted-foreground">
                John Doe
              </div>
              <div className="text-xs text-muted-foreground">
                john@example.com
              </div>
            </div>
          )}

          {/* Menu Items */}
          <div className="py-1">
            {userMenuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setIsOpen(false);
                    // Handle menu item click
                    console.log(`Clicked: ${item.label}`);
                  }}
                  className={`
                    w-full flex items-center space-x-3 px-3 py-2 text-left cursor-pointer
                    transition-colors duration-150 ease-smooth
                    ${
                      item.danger
                        ? "text-red-400 hover:bg-red-500/10 hover:text-red-300"
                        : "text-muted-foreground hover:bg-primary hover:text-muted"
                    }
                  `}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
