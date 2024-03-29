import React, { useContext, useEffect, useState } from "react";
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
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);
  return (
    <ThemeProvider theme={Theme}>
      {userContextData.user.login &&
        userContextData.user.tpUser === null &&
        userContextData.user.srcUser !== null && (
          // (userContextData.user.srcUser !== null && userContextData.user.srcUser.roles[0].name === "SRC_USER") &&
          // add the sna/src User dashboard instead of <Navigate to="/sna_map"/>
          <Navigate to="/sna_map" />
        )}
      {userContextData.user.login &&
        userContextData.user.srcUser === null &&
        userContextData.user.tpUser !== null && (
          // (userContextData.user.tpUser !== null && userContextData.user.tpUser.roles[1].name === "TP_USER") &&
          <SidebarContext>
            <Row className={classes.container}>
              <SidebarComponent style={{ zIndex: "11" }} />
              <Column
                flexGrow={1}
                style={{ zIndex: "12" }}
                className={classes.mainBlock}
              >
                <div
                  className="fixed-top bg-white p-2"
                  style={
                    scroll
                      ? {
                          boxShadow:
                            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                        }
                      : { baxShadow: "none" }
                  }
                >
                  <HeaderComponent />
                </div>
                <div className={classes.contentBlock}>
                  <Outlet />
                </div>
              </Column>
            </Row>
          </SidebarContext>
        )}
    </ThemeProvider>
  );
}

export default PrivateSection;
