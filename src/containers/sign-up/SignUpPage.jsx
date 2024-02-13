import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { validationSchemaRegistrForm } from "../../utils/helpers/validationShema";
import BackgroundImage from "../../assets/images/logo.png";
import { showNotification } from "../../utils/helpers/notification";

const SignUpPage = () => {
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
    showNotification({
      title: "Успешно",
      message: "Вы успешно зарегистрировались!",
      type: "success",
    });
  };

  return (
    <StyledContainer>
      <Box>
        <StyledForm onSubmit={formik.handleSubmit}>
          <TextField
            className="input"
            id="firstName"
            label="First Name"
            variant="outlined"
            {...formik.getFieldProps("firstName")}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            className="input"
            id="lastName"
            label="Last Name"
            variant="outlined"
            {...formik.getFieldProps("lastName")}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            className="input"
            id="email"
            label="Email"
            variant="outlined"
            {...formik.getFieldProps("email")}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            className="input"
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            autoComplete="current-password"
            {...formik.getFieldProps("password")}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Button type="submit" variant="contained" className="button">
            Sing up
          </Button>
          <Box className="text">
            Have an account? <Link to="/">Sign in</Link>
          </Box>
        </StyledForm>
      </Box>
    </StyledContainer>
  );
};

export default SignUpPage;

const StyledContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  height: "100vh",
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

  "& > .input": {
    "& .css-1wc848c-MuiFormHelperText-root.Mui-error": {
      marginBottom: "0",
      lineHeight: "0",
    },
  },

  "& .button": {
    marginBottom: "20px",
    width: "22.8rem",
    height: "54px",
    marginLeft: "18px",
    marginTop: "18px",
  },

  "& > .text": {
    textAlign: "center",
    paddingBottom: "1rem",
  },
});
