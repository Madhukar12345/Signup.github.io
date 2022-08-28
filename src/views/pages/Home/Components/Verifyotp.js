import { Button, Container, TextField, Typography,Card ,Box} from "@material-ui/core";
import { TextFieldsOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import axios from "axios";
import Apiconfig from "src/component/Apiconfig";
import { useHistory } from "react-router-dom";
import { makeStyles, mergeClasses } from "@material-ui/styles";


const useStyles = makeStyles({
  main: {
    width:"100%",
    height: "100vh",
    backgroundColor: "#101010",
  },
  submain: {
    width: "100%",
    height: "270px",
    backgroundColor: "#242526",
    borderRadius: "20px",

    display:"flex",
    justifyContent:"center"
  },
  box:{
    marginTop:"50px"
  },
  text1:{
    display:"flex",
    justifyContent:"center",
    color:"white"
  }

})

export default function Verifyotp() {
  const classes = useStyles()
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
    <Card className={classes.main}>
            <Box className={classes.box}>
              <Container maxWidth="sm">
              <h1 className={classes.text1}> Verify OTP </h1>
      <Card className={classes.submain}>
      <Container maxWidth="sm">
       
        <br />
        <br />

        <lable style={{color:"white"}}>Email</lable>
        <br />
        <TextField style={{background:"#242526",border:"1px solid #242526"}} variant="outlined" placeholder="Enter Email" disabled fullWidth value={email}  ></TextField>
        <br />
        <br />

        <lable  style={{color:"white", paddingBottom:"20px"}}>OTP</lable>
        <br />
        <TextField style={{background:"#242526",paddingBottom:"20px", border:"1px solid #242526 "}}  placeholder="Enter OTP" variant="outlined" fullWidth onChange={(e)=>setOtp(e.target.value)} ></TextField>
        
        

        {/* <Button variant="contained" onClick={()=>veryotp()} >verifyOTP</Button> */}
        <Button
                style={{
                  width: "100%",
                  borderRadius: "7px",
                  height: "45px",
                  backgroundColor: "#E31A89",
                  marginTop: "10px",
                  color: "white",
                }}
  
                //   onClick={() => handleFormSubmit()}
                onClick={()=>veryotp()}
              >
                Click
              </Button>
      </Container>
      
      </Card>
      </Container>
      </Box>
    </Card>
  );
}
