"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useCurrentUser from "@/hooks/useCurrentUser";
import SignOutButton from "@/components/auth/SignOutButton";
import { ExitIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="select-none outline-none">
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-slate-500">FA</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <Link href="/settings">
          <DropdownMenuItem className="gap-2 cursor-pointer">
            Settings
          </DropdownMenuItem>
        </Link>
        <SignOutButton>
          <DropdownMenuItem className="gap-2 cursor-pointer">
            <ExitIcon className="h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </SignOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
