import { LinkProps } from "../../models/Link";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { Link as LinkMUI } from "@mui/material";

export default function Link({ props }: LinkProps) {
  //const { text, route, icon, variant } = link;
  const { text, route, icon, variant } = props;
  return (
    <MenuItem key={text}>
      <LinkMUI color="inherit" href={route}>
        <IconButton aria-label="go to project" color="primary">
          {icon}
        </IconButton>
        <Typography textAlign="center">
          {/*variant={variant}*/}
          {text}
        </Typography>
      </LinkMUI>
    </MenuItem>
  );
}
