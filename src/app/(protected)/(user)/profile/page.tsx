import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <ul className="space-y-2">
        {Array.from({ length: 100 }).map((_, i) => (
          <li key={i} className="text-sm font-medium">
            List {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;
