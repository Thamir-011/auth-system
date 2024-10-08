"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import UserButton from "./auth/UserButton";
import useCurrentUser from "@/hooks/useCurrentUser";
import { Cross1Icon, ExitIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SignOutButton from "./auth/SignOutButton";

const Navbar = () => {
  const path = usePathname();
  const user = useCurrentUser();
  const [navOpened, setNavOpened] = useState(false);

  useEffect(() => {
    setNavOpened(false);
  }, [path]);

  return (
    <nav className="relative bg-secondary flex flex-col gap-3 justify-between items-center p-4 rounded-b-xl w-full shadow-sm">
      <div className="flex w-full justify-between">
        <div className="flex gap-x-2 text-black">
          <Link href="/" className="font-bold text-xl">
            Authentication
          </Link>
        </div>
        <div className="hidden md:block">
          {user ? (
            <UserButton />
          ) : (
            <Button className="font-normal" size={"sm"} asChild>
              <Link href={"/auth/login"}>Login</Link>
            </Button>
          )}
        </div>
        <Button
          className="text-black block md:hidden"
          variant={"ghost"}
          size={"sm"}
          onClick={() => setNavOpened(!navOpened)}
        >
          {navOpened ? (
            <Cross1Icon width={27} height={27} />
          ) : (
            <HamburgerMenuIcon width={27} height={27} />
          )}
        </Button>
      </div>
      <div
        className={`w-full overflow-hidden transition duration-200 ease-in-out ${
          navOpened ? "h-fit" : "h-0"
        }`}
      >
        <ul className="text-white text-center bg-black w-full rounded-lg py-3">
          <Link href={"/settings"}>
            <li className="w-full py-2 my-1">Home</li>
          </Link>
          {user ? (
            <SignOutButton>
              <li className="w-full py-2 my-1 flex items-center justify-center gap-2">
                <ExitIcon className="h-4 w-4" />
                Logout
              </li>
            </SignOutButton>
          ) : (
            <Link href={"/auth/login"}>
              <li className="w-full py-2 my-1">Log in</li>
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
