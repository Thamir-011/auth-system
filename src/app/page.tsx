import LoginButton from "@/components/auth/login";
import SignOutButton from "@/components/auth/SignOutButton";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/auth";
import { ExitIcon } from "@radix-ui/react-icons";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className="flex flex-col gap-5 flex-1 items-center justify-center">
      <p>Auth System</p>
      {user ? (
        <SignOutButton>
          <Button variant={"destructive"} className=" gap-3">
            <ExitIcon className="h-4 w-4" />
            Logout
          </Button>
        </SignOutButton>
      ) : (
        <LoginButton mode="modal" asChild>
          <Button variant={"secondary"} size={"lg"}>
            Sign In
          </Button>
        </LoginButton>
      )}
    </div>
  );
}
