"use client";
import React from "react";
import { SchemaKey } from "../forms/profile.main";
import { Button } from "@/components/ui/shadcn/button";
import Lucid_Icon from "@/components/ui/helper/Lucid_Icon";

interface Profile_infoProps {
  id: SchemaKey;
  icon: string;
  title: string;
  value: string;
  actionLabel: string;
  onAction: () => void;
}

const Profile_info = ({
  id,
  icon,
  title,
  value,
  actionLabel,
  onAction,
}: Profile_infoProps) => {
  console.log(id);

  return (
    <div className="bg-gradient-card rounded-2xl p-5 shadow-pastel border border-white/20 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
            <Lucid_Icon iconName={icon} className="w-8 h-8 text-primary" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-foreground mb-1">{title}</div>
            <div className="text-muted-foreground">{value}</div>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="rounded-xl border-primary/20 text-muted cursor-pointer hover:scale-110 hover:bg-primary/10"
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      </div>
    </div>
  );
};

export default Profile_info;
