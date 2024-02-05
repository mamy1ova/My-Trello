import { Box, Button, FormControl, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const UserFrofile = () => (
  <StyledContainer>
    <Box className="container">
      <img
        src="https://avatars.dzeninfra.ru/get-zen_doc/1594475/pub_6072035f2cd56807be5888be_60720a42c64ef5217e7ba8e1/scale_1200"
        alt="img"
      />

      <FormControl>
        <Typography>Name:</Typography>
        <Typography>Surname:</Typography>
        <Typography>Email:</Typography>
      </FormControl>

      <Link to="/trello">
        <Button>Back</Button>
      </Link>
    </Box>
  </StyledContainer>
);

export default UserFrofile;

const StyledContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  opacity: "0.8",
  paddingTop: "7rem",

  "& > .container": {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "40rem",
    height: "30rem",
    backgroundColor: "#fff",
    borderRadius: "1rem",
    boxShadow:
      "0.5px 2.3px 22.6px rgba(19, 19, 19, 0.717), 1.3px 6.3px 62.6px rgba(22, 21, 21, 0.864)",

    "& img": {
      width: "11rem",
      height: "12rem",
      borderRadius: "50%",
      marginTop: "2rem",
    },

    "& .MuiButton-root": {
      marginTop: "0.6rem",
      backgroundColor: "#2e2e2e",
      color: "#fff",

      "&:hover": {
        backgroundColor: "#000",
      },
    },

    "& > .MuiFormControl-root": {
      display: "flex",
      flexDirection: "column",

      "& > .MuiTypography-root": {
        border: "1px solid #d9d7d7",
        width: "22rem",
        height: "3rem",
        backgroundColor: "#fff",
        borderRadius: "4px",
        margin: "0.5rem",
        padding: "10px",
      },
    },
  },
});
