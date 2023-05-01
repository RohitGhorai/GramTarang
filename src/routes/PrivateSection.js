import React, { useContext } from "react";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import { Column, Row } from "simple-flexbox";
import { SidebarComponent, SidebarContext } from "../Components/sidebar";
import HeaderComponent from "../Components/header/HeaderComponent";
import "./dashboard/index.css";
import { Navigate, Outlet } from "react-router-dom";
import Theme from "../resources/theme";
import userContext from "../context/userContext";

const useStyles = createUseStyles({
  container: {
    height: "100%",
    minHeight: 850,
  },
  mainBlock: {
    marginLeft: 255,
    padding: 30,
    "@media (max-width: 1080px)": {
      marginLeft: 0,
    },
  },
  contentBlock: {
    marginTop: 20,
  },
});

function PrivateSection() {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const userContextData = useContext(userContext);

  return (
    <ThemeProvider theme={Theme}>
      {userContextData.user.login && userContextData.user.tpUser === null && (
        <SidebarContext>
          <Row className={classes.container}>
            <SidebarComponent style={{ zIndex: "11" }} />
            <Column flexGrow={1} className={classes.mainBlock}>
              <HeaderComponent />
              <div className={classes.contentBlock}>
                <Outlet />
              </div>
            </Column>
          </Row>
        </SidebarContext>
      )}
      {userContextData.user.login && userContextData.user.srcUser === null && (

        // add the tp User dashboard instead of <Navigate to="/tp_pia_map"/>
        <Navigate to="/tp_pia_map" />

      )}
    </ThemeProvider>
  );
}

export default PrivateSection;
