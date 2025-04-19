import { m } from "framer-motion";
// @mui
import { Theme, SxProps } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// assets
import { ForbiddenIllustration } from "@/assets/illustrations";
// components
import { MotionContainer, varBounce } from "@/components/animate";

// ----------------------------------------------------------------------

type RoleBasedGuardProp = {
  hasContent?: boolean;
  roles?: string[];
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};

export default function RoleBasedGuard({
  hasContent,
  children,
  sx,
}: RoleBasedGuardProp) {
  return hasContent ? (
    <Container component={MotionContainer} sx={{ textAlign: "center", ...sx }}>
      <m.div variants={varBounce().in}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Permission Denied
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Typography sx={{ color: "text.secondary" }}>
          You do not have permission to access this page
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <ForbiddenIllustration
          sx={{
            height: 260,
            my: { xs: 5, sm: 10 },
          }}
        />
      </m.div>
    </Container>
  ) : (
    <> {children} </>
  );
}
