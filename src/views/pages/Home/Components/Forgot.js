import {
    makeStyles,
    Box,
    Card,
    Typography,
    TextField,
    InputAdornment,
    Container,
    Button,
  } from "@material-ui/core";
  import MailOutlineIcon from "@material-ui/icons/MailOutline";
  
  import React, { useState } from "react";
  import axios from "axios";
  import Apiconfig from "src/component/Apiconfig";
  import { useHistory ,Link} from "react-router-dom";

  
  
  const useStyles = makeStyles({
    main: {
      width:"100%",
      height: "100vh",
      backgroundColor: "#101010",
    },
    submain: {
      width: "100%",
      height: "237px",
      backgroundColor: "#242526",
      borderRadius: "20px",
  
      display:"flex",
      justifyContent:"center"
    },
    box: {
      display: "flex",
      justifyContent: "center",
      marginTop: "34px",
      width:"100%"
    },
    text1: {
      fontFamily: "Montserrat",
  
      fontWeight: "600",
      fontSize: "30px",
      lineHeight: "37px",
      color: "white",
      display: "flex",
      justifyContent: "center",
      paddingTop: "30px",
  
      "@media(max-width: 500px)":{
          fontSize: "25px",
        }
    },
  
    text2: {
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "17px",
      color: "white",
      display: "flex",
      justifyContent: "center",
      paddingTop: "15px",
      "@media(max-width: 500px)":{
          fontSize: "10px",
        }
    },
    text3: {
      color: "#E31A89",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "17px",
      display: "flex",
      justifyContent: "center",
      paddingTop: "28px",
      textDecoration:"none"
    },
  });
  export default function Forgot() {
    const classes = useStyles();
    const [otp,setOtp]=useState();
    // const [email ,setEmail]=useState();
    const history= useHistory();

   const email=window.location.search.split("?")[1]
//    console.log("email======",email);
  const veryotp = async (values) => {
    try {
      const response = await axios({
        method: "post",
        url: Apiconfig.veryotp,
        data: {
          email: email,
          otp: otp,
        },
      });
      if (response.data.responseCode===200){
        history.push("./login");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };
    return (
      <Box className={classes.main}>
        <Typography className={classes.text1}>Forgot password?</Typography>
        <Typography className={classes.text2}>
          Enter your details to receive a rest link
        </Typography>
        <Box className={classes.box}>
            <Container maxWidth="sm">
          <Card className={classes.submain}>
            <Container maxWidth="sm">
              <TextField
                style={{
                  border: "1px solid #555555",
                  marginTop: "30px",
                  borderRadius: "10px",
                  color: "white",
                }}
                variant="outlined"
                fullWidth
                value={email}
                disabled
                placeholder="Your Email"
                type="text"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon
                        style={{
                          color: "#E7E7E7",
                          paddingLeft: "12px",
                          paddingRight: "10px",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                style={{
                  width: "100%",
                  borderRadius: "7px",
                  height: "45px",
                  backgroundColor: "#E31A89",
                  marginTop: "33px",
                  color: "white",
                }}
  
                //   onClick={() => handleFormSubmit()}
                onClick={()=>Forgot()}
              >
                Sign up
              </Button>
              <Link className={classes.text3}
              to="/Login">
                {" "}
                &lt; Back to Sign In
              </Link>
              
            </Container>
          </Card>
          </Container>
        </Box>
      </Box>
    );
  }