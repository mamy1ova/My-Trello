import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { TfiTrello } from "react-icons/tfi";
import { validationSchema } from "../../utils/helpers/validationShema";
import BackgroundImage from "../../assets/images/logo.png";
import { showNotification } from "../../utils/helpers/notification";

const SignInPage = () => {
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
    showNotification({
      title: "Успешно",
      message: "Вход успешно выполнен!",
      type: "success",
    });
  };

  return (
    <StyledContainer>
      <Box>
        <StyledForm onSubmit={formik.handleSubmit}>
          <Typography className="title">
            <TfiTrello /> Trello
          </Typography>

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

          <Button type="submit" variant="contained">
            Log in
          </Button>

          <Box className="text">
            No account? <Link to="/sign-up">Sing up</Link>
          </Box>
        </StyledForm>
      </Box>
    </StyledContainer>
  );
};

export default SignInPage;

const StyledContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",

  "& > .input": {
    "& .css-1wc848c-MuiFormHelperText-root.Mui-error": {
      marginBottom: "0",
      lineHeight: "0",
    },
  },
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

  "& > .title": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontFamily: "Trebuchet MS",
    color: "#3c3c3c",
    marginBottom: "2rem",
    fontSize: "2.3rem",
  },

  "& > .text": {
    textAlign: "center",
    paddingBottom: "1rem",
  },
});
