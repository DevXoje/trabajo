import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { LogoProps } from "../../models/Logo";

/*interface LogoProps {
  backgroundColor: string;
  label: string;
}*/

function Logo({ display, variant, flexGrow }: LogoProps) {
  return (
    <>
      <AdbIcon sx={{ display, mr: 1 }} />
      <Typography
        variant={variant}
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display,
          flexGrow,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>
    </>
  );
}

export default Logo;
