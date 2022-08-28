import { makeStyles } from "@material-ui/core";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles((theme) => ({
    homeSection: {
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    },

    lSection: {
        width: "40px"
    }

}));



export default function Home() {

    const classes = useStyles();

  return (
    <>
      <section id="header" className={classes.homeSection}>
         <div cclassName={classes.lSection}>
            <h1 className="line1" style={{ fontSize:"30px"}}>Grow your business with <strong style={{color:"green" , fontSize:"30px"}}>ThapaTechnical</strong></h1>
            <h2 className="line2" style={{ fontSize:"30px"}}>we are the team of the <div>talented developer making websites</div></h2>
            <div className="line3">
                <a href="" className="btn-get-started" style={{ fontSize:"20px"}}>Get Started</a>
                </div>
        </div>

        <div>
            rivdkfndfklnfknsdfkdsnflknsdlkfsdlfm
        </div>
         
      </section>
    </>
  );
}
