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
import {
  AiOutlineForm,
  AiOutlineMail,
  BsLinkedin,
  BsPersonBadgeFill,
  GiTechnoHeart,
  GrContact,
  ImHeart,
  ImHome,
  RiWhatsappFill,
} from "react-icons/all";
import { Contact, ContactProps } from "../../models/Portfolio";

const pages: LinkProps[] = [
  {
    text: "Home",
    route: "",
    icon: <ImHome />,
  },
  {
    text: "About me",
    route: "",
    icon: <BsPersonBadgeFill />,
  },
  {
    text: "Soft Skills",
    route: "",
    icon: <ImHeart />,
  },
  {
    text: "Projects",
    route: "",
    icon: <GiTechnoHeart />,
  },
  {
    text: "Contact",
    route: "",
    icon: <GrContact />,
  },
];

function TopNavigation({ props: contact }: ContactProps) {
  const contact_links: LinkProps[] = [
    {
      text: "WhatsApp",
      route: `https://wa.me/${"34"}${contact.phone}?text=${
        contact.message.content
      }`,
      icon: <RiWhatsappFill />,
    },
    {
      text: "Linkedin",
      route: contact.linkedin,
      icon: <BsLinkedin />,
    },
    {
      text: "Email",
      route: `mailto:${contact.email}?subject=${contact.message.subject}&body=${contact.message.content}`,
      icon: <AiOutlineMail />,
    },
    {
      text: "Form",
      route: "", //Todo: set route to go to bottom
      icon: <AiOutlineForm />,
    },
  ];

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
                <Avatar
                  alt="Remy Sharp"
                  src="https://source.unsplash.com/random"
                />
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
              links={contact_links}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopNavigation;
