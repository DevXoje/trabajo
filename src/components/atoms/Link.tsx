import { LinkProps } from "../../models/Link";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
function Link({ text, route, onClick }: LinkProps) {
  return (
    <MenuItem key={text} onClick={onClick}>
      <Typography textAlign="center">{text}</Typography>
    </MenuItem>
  );
}

export default Link;
