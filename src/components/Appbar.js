import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  MenuItem,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  InputBase,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import Cookie from "universal-cookie";
import { motion } from "framer-motion";
import AButton from "./AButton";
import Logo from "../data/Logo.json";

const cookie = new Cookie();

const pages = [
  { name: "Inicio", link: "/" },
  { name: "Catálogo", link: "/catalog" },
  { name: "Contacto", link: "/contact" },
];
const settings = [
  "Favorites",
  "Order List",
  "Logout",
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loged, setLoged] = React.useState(cookie.get("loged"));

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Handle search when user press enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate("/catalog/" + event.target.value);
    }
  };

  // Handle logout
  const handleLogout = () => {
    cookie.remove("loged");
    setLoged(false);
    window.location.reload();
  };

  // Handle login
  const handleLogin = () => {
    cookie.set("pagePreLogin", window.location.pathname);
    navigate("/login");
  };

  const handleCloseUserMenu = (event, index) => {
    switch (settings.at(index)) {
      case "Profile":
        break;
      case "Account":
        break;
      case "Favorites":
        navigate("/favorites");
        break;
      case "Order List":
        navigate("/history");
        break;
      case "Dashboard":
        break;
      case "Logout":
        handleLogout();
        break;
      default:
        break;
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button sx={{ height: 100, width: 200 }}>
            <img
              style={{ height: 95, width: "auto" }}
              src={Logo.path}
              alt="LogoImg"
            />
          </Button>

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
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <Button
                  component={motion.div}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  whileHover={{ scale: 1.08 }}
                  key={index}
                  onClick={function (event) {
                    handleCloseNavMenu();
                    navigate(page.link);
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                size="small"
                key={index}
                component={motion.div}
                whileHover={{
                  scale: 1.1,
                }}
                onClick={function (event) {
                  handleCloseNavMenu();
                  navigate(page.link);
                }}
                sx={{
                  marginRight: 2,
                  backgroundColor:
                    location.pathname === page.link ? "white" : "transparent",
                  color: location.pathname === page.link ? "black" : "white",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                  height: 70,
                  width: 110,
                  my: 2,
                }}
              >
                <Typography variant="subtitle1">{page.name}</Typography>
              </Button>
            ))}
          </Box>

          <Search sx={{ width: { xs: "30%", lg: "30%" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar..."
              inputProps={{ "aria-label": "search" }}
              onKeyDown={handleKeyDown}
            />
          </Search>

          {/*Hide menu if user is not loged*/}
          {loged ? (
            <Box sx={{ flexGrow: 0, paddingLeft: 2 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>

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
                {settings.map((setting, index) => (
                  <MenuItem
                    key={index}
                    onClick={(event) => handleCloseUserMenu(event, index)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <AButton
              sx={{ height: 70, width: 150, my: 2 }}
              onClick={handleLogin}
              text="Iniciar Sesion"
            />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
