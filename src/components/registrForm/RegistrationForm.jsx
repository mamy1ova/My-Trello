import React from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { validationSchemaRegistrForm } from "../utils/helpers/validationShema";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchemaRegistrForm,
    onSubmit: (values, { resetForm }) => {
      handleButton();
      resetForm();
      navigate("/trello");
    },
  });

  const handleButton = () => {
    toast.success("Вы успешно зарегистрировались!", {
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
      <RegistForm>
        <div>
          <StyledForm onSubmit={formik.handleSubmit}>
            <StyledTextField
              id="firstName"
              label="First Name"
              variant="outlined"
              {...formik.getFieldProps("firstName")}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <StyledTextField
              id="lastName"
              label="Last Name"
              variant="outlined"
              {...formik.getFieldProps("lastName")}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
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

            <StyledButton type="submit" variant="contained">
              Sing up
            </StyledButton>
            <StyledDiv>
              Have an account? <Link to="/">Log in</Link>
            </StyledDiv>
          </StyledForm>
        </div>
      </RegistForm>
    </>
  );
};

export default RegistrationForm;

const RegistForm = styled("main")({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
});

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  margin: "50px",
  marginTop: "5rem",
  paddingTop: "40px",
  width: "400px",
  borderRadius: "5px",
  backgroundColor: "white",
  boxShadow:
    "0.5px 2.3px 10px rgba(75, 74, 74, 0.349), 1.3px 6.3px 62.6px rgba(174, 174, 174, 0.336)",

  "& div": {
    margin: "10px",
    marginTop: "12px",
  },

  "& button": {
    width: "360px",
    height: "54px",
    marginLeft: "18px",
    backgroundColor: "#3c3c3c",
    "&:hover": {
      backgroundColor: "#000000",
    },
  },
});

const StyledTextField = styled(TextField)({
  "& .css-1wc848c-MuiFormHelperText-root.Mui-error": {
    marginBottom: "0",
    lineHeight: "0",
  },
});

const StyledButton = styled(Button)({
  marginBottom: "20px",
  width: "442px",
  height: "54px",
  marginLeft: "18px",
  marginTop: "18px",
});

const StyledDiv = styled("div")({
  textAlign: "center",
  paddingBottom: "1rem",
});
