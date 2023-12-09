import React from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import { TfiTrello } from "react-icons/tfi";
import { validationSchema } from "../utils/helpers/validationShema";

const LoginForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleButton();
      resetForm();
      navigate("/trello");
    },
  });

  const handleButton = () => {
    toast.success("Вход успешно выполнен!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <StyledLoginForm>
        <div>
          <StyledForm onSubmit={formik.handleSubmit}>
            <h1>
              <TfiTrello /> Trello
            </h1>
            <StyledTextField
              id="email"
              label="Email"
              variant="outlined"
              {...formik.getFieldProps("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <StyledTextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              autoComplete="current-password"
              {...formik.getFieldProps("password")}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Button type="submit" variant="contained">
              Log in
            </Button>
            <StyledDiv>
              No account? <Link to="/registrationForm">Sing up</Link>
            </StyledDiv>
          </StyledForm>
        </div>
      </StyledLoginForm>
    </>
  );
};

export default LoginForm;

const StyledLoginForm = styled("main")({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
});

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  margin: "50px",
  marginTop: "8rem",
  paddingTop: "40px",
  width: "400px",
  borderRadius: "5px",
  maxHeight: "480px",
  backgroundColor: "white",
  boxShadow:
    "0.5px 2.3px 10px rgba(75, 74, 74, 0.349), 1.3px 6.3px 62.6px rgba(174, 174, 174, 0.336)",

  "& div": {
    margin: "10px",
  },

  "& button": {
    marginBottom: "20px",
    marginTop: "18px",
    width: "360px",
    height: "54px",
    marginLeft: "18px",
    backgroundColor: "#3c3c3c",
    "&:hover": {
      backgroundColor: "#000000",
    },
  },
  "& h1": {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    fontFamily: "Trebuchet MS",
    color: "#3c3c3c",
    marginBottom: "2rem",
    fontSize: "2.3rem",
  },
});

const StyledTextField = styled(TextField)({
  "& .css-1wc848c-MuiFormHelperText-root.Mui-error": {
    marginBottom: "0",
    lineHeight: "0",
  },
});

const StyledDiv = styled("div")({
  textAlign: "center",
  paddingBottom: "1rem",
});
