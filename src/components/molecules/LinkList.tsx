import Link from "../atoms/Link";
import { LinkListProps } from "../../models/Link";
import Menu from "@mui/material/Menu";
import * as React from "react";

export default function LinkList({
  links,
  customStyles,
  id,
  anchorEl,
  onClose,
  anchorOrigin,
  transformOrigin,
}: LinkListProps) {
  const allLinks = links.map((link) => <Link props={link.props} />);
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={anchorOrigin}
      keepMounted
      transformOrigin={transformOrigin}
      open={Boolean(anchorEl)}
      onClose={onClose}
      sx={customStyles}
    >
      {allLinks}
    </Menu>
  );
}

/*
<Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>*/
