import React from "react";
import { Row } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";
import profile from "../../Assets/default.png";

const useStyles = createUseStyles((theme) => ({
  title: {
    color: "#fecd03",
    marginLeft: 6,
    fontSize: 18,
    fontWeight: "bold"
  },
  img:{
    width: "50px",
    height: "50px",
    borderRadius: "100%",
  },
  smText:{
    fontSize:12,
    color: "#3fb2c8",
    marginLeft: 6
  },
  rowContainer:{
    display: "flex",
    flexDirection: "column",
    marginLeft: 12
  }
}));

function LogoComponent() {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Row horizontal="center" vertical="center">
      <img src={profile} alt="profileImg" className={classes.img}/>
      <div className={classes.rowContainer}>
      <span className={classes.title}>Demo Center</span>
      <span className={classes.smText}>Training Center</span>
      </div>
    </Row>
  );
}

export default LogoComponent;
