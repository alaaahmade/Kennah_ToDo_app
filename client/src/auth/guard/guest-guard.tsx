import { useCallback, useEffect } from "react";
// routes
import { paths } from "@/routes/paths";
import { useRouter, useSearchParams } from "@/routes/hook";
//
import { useAuthContext } from "../hooks";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function GuestGuard({ children }: Props) {
  const router = useRouter();

  const searchParams = useSearchParams();

  const returnTo = searchParams.get("returnTo") || paths.app.root;

  const { authenticated } = useAuthContext();

  const check = useCallback(() => {
    if (authenticated) {
      router.replace(returnTo);
    }
  }, [authenticated, returnTo, router]);

  useEffect(() => {
    check();
  }, [check]);

  return <>{children}</>;
}
