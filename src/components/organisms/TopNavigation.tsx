import LinkList from "../molecules/LinkList";
import { LinkProps } from "../../models/Link";
import Logo from "../atoms/Logo";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const settings: LinkProps[] = [
  {
    text: "Profile",
    route: "",
    icon: "",
    onClick: "",
  },
  {
    text: "Account",
    route: "",
    icon: "",
    onClick: "",
  },
  {
    text: "Dashboard",
    route: "",
    icon: "",
    onClick: "",
  },
];
const pages: LinkProps[] = [
  {
    text: "Products",
    route: "",
    icon: "",
    onClick: "",
  },
  {
    text: "Pricing",
    route: "",
    icon: "",
    onClick: "",
  },
  {
    text: "Blog",
    route: "",
    icon: "",
    onClick: "",
  },
];

function TopNavigation() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo variant={"h6"} display={{ xs: "none", md: "flex" }} />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <LinkList
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              links={pages}
              id={"menu-appbar"}
              anchorEl={anchorElNav}
              onClose={handleCloseNavMenu}
              customStyles={{ display: { xs: "block", md: "none" } }}
            />
          </Box>
          <Logo
            variant={"h5"}
            display={{ xs: "flex", md: "none" }}
            flexGrow={1}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.text}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.text}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <LinkList
              customStyles={{ mt: "45px" }}
              id={"menu-appbar"}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              onClose={handleCloseUserMenu}
              links={pages}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopNavigation;
