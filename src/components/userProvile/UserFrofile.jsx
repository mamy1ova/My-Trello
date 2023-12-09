import { Button, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const UserFrofile = () => {
  return (
    <StyledContainer>
      <StyledDiv>
        <img
          src="https://avatars.dzeninfra.ru/get-zen_doc/1594475/pub_6072035f2cd56807be5888be_60720a42c64ef5217e7ba8e1/scale_1200"
          alt="img"
        />
        <form>
          <span>Name:</span>
          <span>Surname:</span>
          <span>Email:</span>
        </form>

        <Link to="/trello">
          <Button>Back</Button>
        </Link>
      </StyledDiv>
    </StyledContainer>
  );
};

export default UserFrofile;

const StyledContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  opacity: "0.8",
  paddingTop: "7rem",
});

const StyledDiv = styled("div")({
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

  "& button": {
    marginTop: "0.6rem",
    backgroundColor: "#2e2e2e",
    color: "#fff",
    ":hover": {
      backgroundColor: "#000",
    },
  },

  "& form": {
    display: "flex",
    flexDirection: "column",
    span: {
      border: "1px solid #d9d7d7",
      width: "22rem",
      height: "3rem",
      backgroundColor: "#fff",
      borderRadius: "4px",
      margin: "0.5rem",
      padding: "10px",
    },
  },
});
