import {
  Container,
  Box,
  TextField,
  Button,
  makeStyles,
  Card,
  Grid,
  Divider,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@material-ui/core";
import axios from "axios";
import "../../../../scss/main.css";
import { first } from "lodash";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Apiconfig from "src/component/Apiconfig";
import { FaGoogle } from "react-icons/fa";
import { GrApple } from "react-icons/gr";
import { Link } from "react-router-dom";
import { GiMale } from "react-icons/gi";
// import { AiOutlineMail } from "react-icons/ai";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as yup from "yup";
import { Formik, Form } from "formik";

const useStyles = makeStyles({
  main: {
    backgroundColor: "#101010",
    width: "100%",
    minHeight: "100vh",
  },
  submain: {
    backgroundColor: "#242526",
    width: "100%",
    height: "auto",
    marginTop: "50px",
    borderRadius: "20px",
    paddingBottom: "50px",
  },
  box: {
    display: "flex",
    justifyContent: "center",
  },
  icons: {
    paddingRight: "15px",
    width: "20px",
    height: "20px",
  },
});

export default function Signup() {
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const classes = useStyles();

  const history = useHistory();
  const [startDate, setStartDate] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const [value, setValue] = useState();

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleFormSubmit = async (values) => {
    // setIsLoading(true);
    // setBtnText("Creating....");
    console.log("values-----", values);
    try {
      const res = await axios.post(Apiconfig.user, {
        firstName: values.firstName,
        lastName: "hello",
        mobileNumber:  values.email,
        email: values.email,
        password: values.password,
        confirmPassword: values.password,
        countryCode: "20",
        dateOfBirth: values.dateOfBirth,
      });

      if (res.data.responseCode === 200) {
        // setIsLoading(false);

        history.push({pathname:"/Verifyotp", search:values.email});
      }
    } catch (error) {
      console.log(error);
      // setIsLoading(false);
      // toast.error(error.message);
      // setBtnText("CREATE AN ACCOUNT");
    }
  };

  useEffect(() => {
    axios.get("/static/json/countries.json").then(function (response) {});
  }, []);

  const formInitialSchema = {
    email: "",
    firstName: "",
    password: "",
    dateOfBirth: "",
    gender: "",
  };

  const formValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("You have entered an invalid email address. Please try again")
      .required("Email address is required")
      .matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"),
    firstName: yup
      .string()
      .required("First name is required")
      .min(2, "Please enter atleast 2 characters")
      .max(35, "You can enter only 35 characters")
      .matches(
        "^[A-Za-z][A-Za-z0-9_]{7,29}*$",
        "First letter must be in capital letter "
      ),

    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Please Enter valid password.  "
      ),

    dateOfBirth: yup.string().required("please select any date"),
    gender: yup.string().required("please select any gender"),
  });

  return (
    <Card className={classes.main}>
      <Box className={classes.box}>
        <Container maxWidth="sm">
          <Card className={classes.submain}>
            <Box style={{ marginTop: "40px" }}>
              <Container>
                <Grid container spacing={3}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      variant="outlined"
                      style={{
                        backgroundColor: "#DC4E41",
                        borderRadius: "7px",
                        color: "#FFFFFF",
                        width: "100%",
                        height: "40px",
                      }}
                    >
                      {" "}
                      <FaGoogle className={classes.icons} />
                      Log in with Google
                    </Button>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={6}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      variant="outlined"
                      style={{
                        backgroundColor: "#000000",
                        borderRadius: "7px",
                        color: "#FFFFFF",
                        width: "100%",
                        height: "40px",
                      }}
                    >
                      {" "}
                      <GrApple className={classes.icons} /> Log in with Apple
                    </Button>
                  </Grid>
                </Grid>
              </Container>

              <Box
                style={{ display: "flex", color: "white", marginTop: "44px" }}
              >
                <hr style={{ width: "40%", border: "0.5px solid #555555" }} />
                <Typography style={{ fontWeight: "600" }}>OR</Typography>
                <hr style={{ width: "40%", border: "0.5px solid #555555" }} />
              </Box>
            </Box>
            <Container>
              <Formik
                initialValues={formInitialSchema}
                initialStatus={{
                  success: false,
                  successMsg: "",
                }}
                validationSchema={formValidationSchema}
                onSubmit={values => handleFormSubmit(values)}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  touched,
                  values,
                  setFieldValue,
                }) => (
                  <Form>
                    <TextField
                      style={{
                        border: "1px solid #555555",
                        marginTop: "30px",
                        borderRadius: "10px",
                        color: "white",
                      }}
                      name="email"
                      value={values.email}
                      error={Boolean(touched.email && errors.email)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      placeholder="Your Email"
                      type="text"
                      // onChange={e => setFirst(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MailOutlineIcon
                              style={{ color: "#E7E7E7", paddingLeft: "12px" }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <FormHelperText
                      error
                      style={{
                        margin: "0px",
                        fontSize: "12px",
                        paddingBottom: "0px !important",
                      }}
                    >
                      {touched.email && errors.email}
                    </FormHelperText>
                    <br />
                    <br />

                    <TextField
                      style={{
                        border: "1px solid #555555",
                        borderRadius: "10px",
                      }}
                      name="firstName"
                      value={values.firstName}
                      error={Boolean(touched.firstName && errors.firstName)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      placeholder="Your Name"
                      inputProps={{
                        color: "#fff",
                      }}
                      type="text"
                      // onChange={e => setlast(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon
                              style={{ color: "#E7E7E7", paddingLeft: "12px" }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <FormHelperText
                      error
                      style={{
                        margin: "0px",
                        textAlign: "left",
                        fontSize: "12px",
                        paddingBottom: "0px !important",
                      }}
                    >
                      {touched.firstName && errors.firstName}
                    </FormHelperText>

                    <br />
                    <br />

                    <TextField
                      style={{
                        border: "1px solid #555555",
                        borderRadius: "10px",
                      }}
                      name="password"
                      value={values.password}
                      error={Boolean(touched.password && errors.password)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      placeholder="Create Password"
                      type={showPassword ? "text" : "password"}
                      // onChange={e => setpassword(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon
                              style={{ color: "#E7E7E7", paddingLeft: "12px" }}
                            />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              style={{ color: "#FFFFFF" }}
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              // edge="end"
                            >
                              {showPassword ? (
                                <VisibilityIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <FormHelperText
                      error
                      style={{
                        margin: "0px",
                        fontSize: "12px",
                        paddingBottom: "0px !important",
                      }}
                    >
                      {touched.password && errors.password}
                    </FormHelperText>
                    <br />
                    <br />

                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={6}>
                        {/* <DatePicker
               style={{backgroundColor:"red", height:"100px", width:"40px"}}
                 selected={startDate}
                 onChange={(date) => setStartDate(date)}
                 disabledKeyboardNavigation
                 placeholderText="enter date of birth"
               /> */}
                        <TextField
                          style={{
                            border: "1px solid #555555",
                            borderRadius: "10px",
                          }}
                          variant="outlined"
                          fullWidth
                          type="date"
                          name="dateOfBirth"
                          value={values.dateOfBirth}
                          error={Boolean(
                            touched.dateOfBirth && errors.dateOfBirth
                          )}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        <FormHelperText
                          error
                          style={{
                            margin: "0px",
                            fontSize: "12px",
                            paddingBottom: "0px !important",
                          }}
                        >
                          {touched.dateOfBirth && errors.dateOfBirth}
                        </FormHelperText>
                      </Grid>

                      <br />
                      <br />
                      <Grid item xs={12} sm={6} md={6}>
                        <Box
                          style={{
                            border: "1px solid #555555",
                            borderRadius: "10px",
                          }}
                        >
                          <FormControl component="fieldset">
                            <RadioGroup
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                              aria-label="gender"
                              name="gender"
                              value={values.gender}
                              error={Boolean(touched.gender && errors.gender)}
                              onBlur={handleBlur}
                              onChange={handleChange}

                              // onChange={handleChange}
                            >
                              <GiMale
                                style={{
                                  color: "white",
                                  fontSize: "25px",

                                  paddingRight: "16.5px",
                                }}
                              />
                              <FormControlLabel
                                value="Female"
                                control={<Radio />}
                                label="Female"
                                color="#E31A89"
                              />
                              <FormControlLabel
                                value="Male"
                                control={<Radio />}
                                label="Male"
                                color="#E31A89"
                              />
                            </RadioGroup>
                          </FormControl>
                        </Box>
                        <FormHelperText
                          error
                          style={{
                            margin: "0px",
                            fontSize: "12px",
                            paddingBottom: "0px !important",
                          }}
                        >
                          {touched.gender && errors.gender}
                        </FormHelperText>
                      </Grid>
                    </Grid>

                    <Button
                      type="submit"
                      style={{
                        width: "100%",
                        borderRadius: "7px",
                        height: "45px",
                        backgroundColor: "#E31A89",
                        marginTop: "33px",
                        color: "white",
                      }}
                      onClick={() => handleFormSubmit()}
                    >
                      Sign up
                    </Button>
                    <br />
                    <br />
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "22px",
                      }}
                    >
                      <Typography
                        style={{
                          color: "white",
                          fontWeight: "600",
                          fontSize: "14px",
                          lineHeight: "17px",
                        }}
                      >
                        If you are an existing user,{" "}
                      </Typography>{" "}
                      <Link
                        style={{
                          color: "white",
                          paddingLeft: "20px",
                          textDecoration: "none",
                          color: "#E31A89",
                          fontWeight: "600",
                          fontSize: "14px",
                          lineHeight: "17px",
                        }}
                        to="/Login"
                      >
                        Sign In
                      </Link>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Container>
          </Card>
        </Container>
      </Box>
    </Card>
  );
}
