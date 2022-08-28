import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";
import Banner from "./Banner";
import App from "./"
import Signup from "./Components/Signup";
import Login from "./Components/Login"
import Date from "./Date"
import Forgot from "./Components/Forgot"
import Verifyotp from "./Components/Verifyotp"
function Home(props) {
  return (
    <Page title="Marketplace | MetaArts">
      <Signup/>
      <Verifyotp/>
      <Login/> 
      <Forgot/>
      
    
   
     
    </Page>
  );
}

export default Home;
