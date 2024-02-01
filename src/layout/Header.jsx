import { useState } from "react";
import { TfiTrello } from "react-icons/tfi";
import { Link } from "react-router-dom";
import {
  Badge,
  Avatar,
  Stack,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
  styled,
  Box,
} from "@mui/material";
import { PersonAdd, Settings, Logout } from "@mui/icons-material";
import ImageModalContainer from "../components/trelloApp/ImageModalContainer";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => setAnchorEl(e.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <StyledHeader>
      <Typography className="logo">
        <TfiTrello />
        Trello
      </Typography>

      <StyledIcons>
        <Box className="modal">
          <ImageModalContainer />
        </Box>

        <Stack direction="row" spacing={2}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              className="avatar"
              onClick={handleClick}
              alt="Meerim"
              src="https://avatars.dzeninfra.ru/get-zen_doc/1594475/pub_6072035f2cd56807be5888be_60720a42c64ef5217e7ba8e1/scale_1200"
            />
          </StyledBadge>

          <StyledMenu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar />
              <Link to="/userProfile">Профиль</Link>
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
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Выйти
              </MenuItem>
            </Link>
          </StyledMenu>
        </Stack>
      </StyledIcons>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled(Box)(() => ({
  backgroundColor: "#2e2e2e",
  width: " 100%",
  height: "4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "& > .logo": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontFamily: "Trebuchet MS",
    color: "#fff",
    padding: "10px",
    fontSize: "1.7rem",
    marginLeft: "4rem",
    marginRight: "1rem",
  },

  "& .avatar": {
    marginTop: "7px",
    marginRight: "3rem",
    width: "2.2rem",
    height: "2.2rem",
  },
}));

const StyledMenu = styled(Menu)(() => ({
  "& > .MuiAvatar-root": {
    width: "32rem",
    height: "32rem",
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
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
}));

const StyledIcons = styled(Box)({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",

  "& .modal": {
    marginTop: "0.8rem",
  },
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    marginRight: "2.5rem",
    position: "absolute",
    top: "1.8rem",

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
