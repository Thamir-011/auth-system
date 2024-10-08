"use client";

import { logout } from "@/actions/logout";
import { signOut } from "next-auth/react";

const SignOutButton = ({ children }: { children?: React.ReactNode }) => {
  const signOutAction = async () => {
    await signOut();
    await logout();
  };

  return (
    <span onClick={signOutAction} className="cursor-pointer">
      {children}
    </span>
  );
};

export default SignOutButton;
