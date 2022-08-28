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
  Checkbox,
  checked,
  FormHelperText,
} from "@material-ui/core";
import axios from "axios";
import "../../../../scss/main.css";
import { first } from "lodash";
import React, { useState,useEffect} from "react";
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
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import * as yup from "yup";
import { Formik, Form } from "formik";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  main: {
    backgroundColor: "#101010",
    width: "100%",
    height: "auto",
    paddingBottom: "235px",
  },
  submain: {
    backgroundColor: "#242526",
    width: "100%",
    height: "auto",
    paddingBottom: "40px",
    marginTop: "100px",
    borderRadius: "20px",
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
  button: {
    backgroundColor: "#DC4E41",
    borderRadius: "24px",

    width: "100%",
    height: "40px",
  },
  box1: {
    display: "flex",
    color: "white",
    marginTop: "30px",
    marginBottom: "20px",
  },
  box2: {
    display: "flex",
    alignItems: "center",
    paddingTop: "10px",
  },
  TextField: {
    border: "1px solid #555555",
    borderRadius: "10px",
    color: "white",
  },
  box3: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
    justifyContent: "space-between",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function Login() {
  const [countryCode, setCountryCode] = useState();
  const [checked, setChecked] = React.useState(true);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const classes = useStyles();

  const history = useHistory();
  const [startDate, setStartDate] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  // const [startDate, setStartDate] = useState(new Date());
  // const [value, setValue] = useState("Female");
  const [First, setFirst] = useState();
  const [last, setlast] = useState();
  const [email, setemail] = useState();
  const [Mobile, setMobile] = useState();
  const [password, setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [value, setValue] = React.useState(0);

  const tabs = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange1 = event => {
    setChecked(event.target.checked);
  };

  // console.log("value", First);
  // const handleChange = event => {
  //   setValue(event.target.value);
  // };

  const handleFormSubmit = async (values) => {
    // setIsLoading(true);
    // setBtnText("Creating....");
    console.log("values-----", values);
    try {
      const res = await axios.post(Apiconfig.login, {
        
    
        email:  values.email,
      
        password: values.password,
        
      });

      if (res.data.responseCode === 200) {
        // setIsLoading(false);

        history.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
      // setIsLoading(false);
      // toast.error(error.message);
      // setBtnText("CREATE AN ACCOUNT");
    }
  };

  useEffect(() => {
  
  }, []);

  
  const formInitialSchema = {
    email: "",  
    password: "",
    mobile:""
  
  };

  const formValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("You have entered an invalid email address. Please try again")
      .required("Email address is required")
      .matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"),
 

    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Please Enter valid password.  "
      ),
   
      mobile:yup
      .string()
      .required("Mobile number is required")
      



    
  });

  return (
    <Card className={classes.main}>
      <Box className={classes.box}>
        <Container maxWidth="sm">
          <Card className={classes.submain}>
            <Container maxWidth="sm">
              <Box style={{ marginTop: "40px" }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={6} className={classes.grid}>
                    <Button
                      variant="outlined"
                      className={classes.button}
                      style={{
                        backgroundColor: "#DC4E41",
                        color: "#FFFFFF",
                      }}
                    >
                      {" "}
                      <FaGoogle className={classes.icons} />
                      Log in with Google
                    </Button>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} className={classes.grid}>
                    <Button
                      variant="outlined"
                      className={classes.button}
                      style={{
                        backgroundColor: "#000000",
                        color: "#FFFFFF",
                      }}
                    >
                      {" "}
                      <GrApple className={classes.icons} /> Log in with Apple
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} className={classes.grid}>
                    <Button
                      variant="outlined"
                      className={classes.button}
                      style={{
                        backgroundColor: "#FFFFFF",

                        color: "#1877F2",
                      }}
                    >
                      {" "}
                      <FaFacebookF className={classes.icons} />
                      Login with facebook
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} className={classes.grid}>
                    <Button
                      variant="outlined"
                      className={classes.button}
                      style={{
                        backgroundColor: "#1E8DF4",

                        color: "#FFFFFF",
                      }}
                    >
                      {" "}
                      <FaTwitter className={classes.icons} />
                      Log in with Twitter
                    </Button>
                  </Grid>
                </Grid>

                <Box className={classes.box1}>
                  <hr style={{ width: "210px", border: "1px solid #555555" }} />
                  <Typography style={{ fontWeight: "600 " }}>OR</Typography>
                  <hr style={{ width: "210px", border: "1px solid #555555" }} />
                </Box>
              </Box>

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
                    <Tabs
                      value={value}
                      onChange={tabs}
                      aria-label="simple tabs example"
                    >
                      <Tab
                        className={classes.root1}
                        label="Email"
                        {...a11yProps(0)}
                      />
                      <Tab
                        style={{ color: "#FFFFFF" }}
                        label="Mobile Number"
                        {...a11yProps(1)}
                      />
                    </Tabs>

                    <TabPanel value={value} index={0}>
                      <TextField
                        className={classes.TextField}
                        style={{
                          
                        }}
                        name="email"
                        value={values.email}
                        error={Boolean(touched.email && errors.email)}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        placeholder="abcd@gmail.com"
                        type="text"
                        // onChange={e => setFirst(e.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <MailOutlineIcon
                                style={{
                                  color: "#E7E7E7",
                                  paddingLeft: "12px",
                                }}
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
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <PhoneInput
                        name="mobile"
                        // value={values.mobile}
                        // error={Boolean(touched.mobile && errors.mobile)}

                        value={values.mobile}
                        error={Boolean(touched.mobile && errors.mobile)}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        country={"in"}
                        className={classes.formcontrol}
                        variant="outlined"
                        inputProps={{
                          style: {
                            width: "100%",
                            height: "42px",
                            backgroundColor: "#242526",
                            borderRadius: "10px",
                            border: "1px solid #555555",
                            color: "white",
                          },
                        }}
                        // value={values.number}
                        // error={Boolean(touched.number && errors.number)}
                        // onBlur={handleBlur}
                        // country={"India"}
                        // defaultCountry="+91"
                        // onChange={(number, e) => {
                        //   setCountryCode(e.dialCode);
                        //   // setFieldValue("number", number);
                        // }}
                      />
                      {/* </InputAdornment>
                  ),
                }
              /> */}
                      <FormHelperText
                        error
                        style={{
                          margin: "0px",
                          fontSize: "12px",
                          paddingBottom: "0px !important",
                        }}
                      >
                        {touched.mobile && errors.mobile}
                      </FormHelperText>
                    </TabPanel>

                    <br />
                    <br />

                    <TextField
                      className={classes.TextField}
                      name="password"
                      value={values.password}
                      error={Boolean(touched.password && errors.password)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      placeholder="***********"
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

                    <Box
                      className={classes.box3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "10px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box style={{ display: "flex", alignItems: "center" }}>
                        <Box>
                        <FormControlLabel
                          name="checkbox"
                          value={values.checkbox}
                          error={Boolean(touched.checkbox && errors.checkbox)}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          control={<Checkbox />}
                        />

                        <FormHelperText
                          error
                          style={{
                            margin: "0px",
                            fontSize: "12px",
                            paddingBottom: "0px !important",
                          }}
                        >
                          {touched.checkbox && errors.checkbox}
                        </FormHelperText>
                        </Box>

                        <Typography
                          style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            lineHeight: "17px",
                            color: "white",
                            paddingLeft: "19px",
                          }}
                        >
                          Remember me
                        </Typography>
                      </Box>

                      <Link
                        style={{
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "17px",
                          color: "#1F73B7",
                          textDecoration: "none",
                        }}
                        to="/Forgot"
                      >
                        Forgot Password?
                      </Link>
                    </Box>

                    <Button
                      type="submit"
                      style={{
                        width: "100%",
                        borderRadius: "7px",
                        height: "45px",
                        backgroundColor: "#E31A89",
                        marginTop: "15px",
                        color: "white",
                      }}
                      onClick={() => handleFormSubmit()}
                    >
                      Sign In
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
                        You haven’t any account ?{" "}
                      </Typography>{" "}
                      <Link
                        style={{
                          color: "white",
                          paddingLeft: "20px",
                          textDecoration: "none",
                          color: "#1F73B7",
                          fontWeight: "600",
                          fontSize: "14px",
                          lineHeight: "17px",
                        }}
                        to="/Signup"
                      >
                        Sign Up
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
