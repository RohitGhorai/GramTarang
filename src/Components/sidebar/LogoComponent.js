import React, { useContext } from "react";
import { Row } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";
import profile from "../../Assets/default.png";
import userContext from "../../context/userContext";

const useStyles = createUseStyles((theme) => ({
  title: {
    color: "#fecd03",
    marginLeft: 6,
    fontSize: 18,
    fontWeight: "bold",
  },
  img: {
    width: "50px",
    height: "50px",
    borderRadius: "100%",
  },
  smText: {
    fontSize: 12,
    color: "#3fb2c8",
    marginLeft: 6,
  },
  rowContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 12,
  },
}));

function LogoComponent() {
  const data = useContext(userContext);
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Row horizontal="center" vertical="center">
      <img src={profile} alt="profileImg" className={classes.img} />
      <div className={classes.rowContainer}>
        <span className={classes.title}>
          {data.user.tpUser !== null
            ? data.user.tpUser.orgName
            : data.user.srcUser.name}
        </span>
        <span className={classes.smText}>
          {data.user.tpUser !== null ? "Training Center" : "Admin"}
        </span>
      </div>
    </Row>
  );
}

export default LogoComponent;
