"use client";
import React, { useMemo } from "react";
import { useSession } from "@/libs/hooks/use-session";
import ProfileForm from "@/libs/forms/form.profile";
import Profile_info from "./info/Profile_info";
import { Dialog, DialogTitle } from "@/components/ui/shadcn/dialog";
import { DialogContentUserProfile } from "@/components/ui/custom/dialog";
import { Description } from "@radix-ui/react-dialog";
import Profile_forms from "./info/Profile_forms";

const Profile_User = () => {
  const { user } = useSession();

  const userInfoList = useMemo(() => {
    return ProfileForm.map((item) => ({
      id: item.id,
      icon: item.icon || "User",
      title: item.title || "",
      value: user[item.id] ?? "Not Provided",
      actionLabel: item.submit?.action === "edit" ? "Edit" : "Update",
      onAction: () => onAction(item.id),
    }));
  }, [user]);

  return (
    <section className="min-h-screen bg-gradient-pastel">
      <div className="container mx-auto px-4 pb-8">
        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 shadow-bubbly">
          <h2 className="text-xl font-bold text-foreground mb-6">
            User Information
          </h2>
          <div className="space-y-4">
            {userInfoList.map((props) => (
              <Profile_info key={props.id} {...props} />
            ))}
          </div>
        </div>
      </div>

      {/* Centralized Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContentUserProfile className="w-fit min-w-128">
          <Profile_forms currentSchema={currentSchema} />
        </DialogContentUserProfile>
        <DialogTitle className="hidden" />
        <Description className="hidden" />
      </Dialog>
    </section>
  );
};

export default Profile_User;
