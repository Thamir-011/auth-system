import { UserRole } from "@prisma/client";
import FormError from "../FormError";
import { useCurrentRole } from "@/hooks/useCurrentRole";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return <FormError message="You don't have access to this page!" />;
  }

  return <>{children}</>;
};

export default RoleGate;
