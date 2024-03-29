import React, { useContext } from "react";
import { string } from "prop-types";
import { useNavigate } from "react-router-dom";
import { Row } from "simple-flexbox";
import profile from "../../Assets/default.png";
import { createUseStyles, useTheme } from "react-jss";
import { SidebarContext } from "../../hooks/useSidebar";
import SLUGS from "../../resources/slugs";
import { IconBell, IconSearch } from "../../Assets/icons";
import DropdownComponent from "../../Components/dropdown";
import userContext from "./../../context/userContext";

const useStyles = createUseStyles((theme) => ({
  avatar: {
    height: 35,
    width: 35,
    minWidth: 35,
    borderRadius: 50,
    marginLeft: 14,
    border: `1px solid ${theme.color.lightGrayishBlue2}`,
    "@media (max-width: 768px)": {
      marginLeft: 14,
    },
  },
  container: {
    height: 40,
    width: "100v",
  },
  name: {
    ...theme.typography.itemTitle,
    textAlign: "right",
    color: "#025c6d",
    marginLeft: 5,
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  separator: {
    borderLeft: `1px solid ${theme.color.lightGrayishBlue2}`,
    marginLeft: 32,
    marginRight: 32,
    height: 32,
    width: 2,
    "@media (max-width: 768px)": {
      marginLeft: 14,
      marginRight: 0,
    },
  },
  title: {
    ...theme.typography.title,
    "@media (min-width: 1080px)": {
      marginLeft: 240,
    },
    "@media (max-width: 1080px)": {
      marginLeft: 50,
    },
    "@media (max-width: 468px)": {
      fontSize: 20,
    },
  },
  iconStyles: {
    cursor: "pointer",
    marginLeft: 25,
    "@media (max-width: 768px)": {
      marginLeft: 12,
    },
  },
}));

function HeaderComponent() {
  const navigate = useNavigate();
  const { currentItem } = useContext(SidebarContext);
  const theme = useTheme();
  const classes = useStyles({ theme });
  const data = useContext(userContext);
  console.log(data);
  let title;
  switch (true) {
    case currentItem === SLUGS.dashboard:
      title = "Dashboard";
      break;
    case [
      SLUGS.projectManagement,
      SLUGS.projectManagementTwo,
      SLUGS.projectManagementThree,
      SLUGS.projectManagementFour,
    ].includes(currentItem):
      title = "Project Management";
      break;
    case [
      SLUGS.centerManagement,
      SLUGS.centerManagementTwo,
      SLUGS.centerManagementThree,
      SLUGS.centerManagementFour,
    ].includes(currentItem):
      title = "Center Management";
      break;
    case [
      SLUGS.batchManagement,
      SLUGS.batchManagementTwo,
      SLUGS.batchManagementThree,
      SLUGS.batchManagementFour,
      SLUGS.batchManagementFive,
      SLUGS.batchManagementSix,
      SLUGS.studentData,
    ].includes(currentItem):
      title = "Batch Management";
      break;
    case SLUGS.profileManagement.includes(currentItem):
      title = "Profile Management";
      break;
    case currentItem === SLUGS.settings:
      title = "Settings";
      break;
    default:
      title = "";
  }

  function onSettingsClick() {
    navigate(SLUGS.settings);
  }

  return (
    <Row
      className={classes.container}
      vertical="center"
      horizontal="space-between"
    >
      <div className="d-flex justify-content-center px-5">
        <span className={classes.title}>{title}</span>
      </div>
      <Row vertical="center">
        <div className={classes.iconStyles}>
          <IconSearch />
        </div>
        {/* <div className={classes.iconStyles}>
          <DropdownComponent
            label={<IconBell />}
            options={[
              {
                label: "Notification #1",
                onClick: () => console.log("Notification #1"),
              },
              {
                label: "Notification #2",
                onClick: () => console.log("Notification #2"),
              },
              {
                label: "Notification #3",
                onClick: () => console.log("Notification #3"),
              },
              {
                label: "Notification #4",
                onClick: () => console.log("Notification #4"),
              },
            ]}
            position={{
              top: 42,
              right: -14,
            }}
          />
        </div> */}
        <div className={classes.separator}></div>
        <DropdownComponent
          label={
            <>
              <img src={profile} alt="avatar" className={classes.avatar} />
              <span className={classes.name}>
                {data.user.tpUser !== null
                  ? data.user.tpUser.orgName
                  : data.user.srcUser.name}
              </span>
            </>
          }
          options={[
            {
              label: "Settings",
              onClick: onSettingsClick,
            },
            {
              label: "Logout",
              onClick: () => console.log("logout"),
            },
          ]}
          position={{
            top: 52,
            right: -6,
          }}
        />
      </Row>
    </Row>
  );
}

HeaderComponent.propTypes = {
  title: string,
};

export default HeaderComponent;
