import React from "react";
import { TfiTrello } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Divider, ListItemIcon, Menu, MenuItem, styled } from "@mui/material";
import ImageModalContainer from "../components/trelloApp/ImageModalContainer";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledHeader>
        <h1>
          <TfiTrello />
          Trello
        </h1>
        <StyledIcons>
          <h1>
            <ImageModalContainer />
          </h1>

          <Stack direction="row" spacing={2}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <StyledAvatar
                onClick={handleClick}
                alt="Meerim"
                src="https://avatars.dzeninfra.ru/get-zen_doc/1594475/pub_6072035f2cd56807be5888be_60720a42c64ef5217e7ba8e1/scale_1200"
              />
            </StyledBadge>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar /> <Link to="/userProfile">Профиль</Link>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Добавить учетную запись
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Настройки
              </MenuItem>
              <Link to="/">
                <StyledMenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Выйти
                </StyledMenuItem>
              </Link>
            </Menu>
          </Stack>
        </StyledIcons>
      </StyledHeader>
    </>
  );
};

export default Header;

const StyledHeader = styled("div")({
  backgroundColor: "#2e2e2e",
  width: " 100%",
  height: "4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  " & h1": {
    display: "flex",
    gap: "10px",
    fontFamily: "Trebuchet MS",
    color: "#fff",
    padding: "10px",
    fontSize: "1.7rem",
    marginLeft: "1rem",
    marginRight: "1rem",
  },
});

const StyledIcons = styled("div")({
  display: "flex",
  justifyContent: "end",
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    marginRight: "1.3rem",
    position: "absolute",
    top: "1.9rem",
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const StyledAvatar = styled(Avatar)({
  marginTop: "7px",
  marginRight: "1.5rem",
  width: "2.2rem",
  height: "2.2rem",
});

const StyledMenuItem = styled(MenuItem)({
  textDecoration: "none",
  color: "#212121",
  textTransform: "none",
  marginLeft: "3px",
});
