import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Column, Row } from "simple-flexbox";
import { SidebarComponent, SidebarContext } from "../Components/sidebar";
import HeaderComponent from "../Components/header/HeaderComponent";
import './dashboard/index.css';
import PrivateRoutes from "./PrivateRoutes";

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

  return (
    <>
      <SidebarContext>
            <Row className={classes.container}>
                <SidebarComponent style={{zIndex:"11"}}/>
                <Column flexGrow={1} className={classes.mainBlock}>
                    <HeaderComponent />
                    <div className={classes.contentBlock}>
                      <PrivateRoutes/>
                    </div>
                </Column>
            </Row>
        </SidebarContext>
    </>
  );
}

export default PrivateSection;
