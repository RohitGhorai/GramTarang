import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { useNavigate } from "react-router-dom";
import SLUGS from "../../resources/slugs";
import { IconLogout, IconSettings } from "../../Assets/icons";
import { convertSlugToUrl } from "../../resources/utilities";
import LogoComponent from "./LogoComponent";
import Menu from "./MenuComponent";
import MenuItem from "./MenuItemComponent";
import iconArrowRight from "../../Assets/icons/icon-arrow-right";
import iconGroup from "../../Assets/icons/icon-group";
import iconArchive from "../../Assets/icons/icon-archive";
import iconBatch from "../../Assets/icons/icon-batch";
import iconProfile from "../../Assets/icons/icon-profile";
import iconDashboard from "../../Assets/icons/icon-dashboard";

const useStyles = createUseStyles({
  separator: {
    borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06,
  },
});

function SidebarComponent() {
  const navigate = useNavigate();
  const theme = useTheme();
  const classes = useStyles({ theme });
  const isMobile = window.innerWidth <= 1080;

  async function logout() {
    navigate(SLUGS.login);
  }

  function onClick(slug, parameters = {}) {
    navigate(convertSlugToUrl(slug, parameters));
  }

  return (
    <Menu isMobile={isMobile}>
      <div style={{ paddingBottom: 30, marginTop: "30" }}>
        <LogoComponent />
      </div>
      <MenuItem
        id={SLUGS.dashboard}
        title="Dashboard"
        icon={iconDashboard}
        onClick={() => onClick(SLUGS.dashboard)}
      />
      <MenuItem
        id={SLUGS.projectManagement}
        items={[
          SLUGS.projectManagementTwo,
          SLUGS.projectManagementThree,
          SLUGS.projectManagementFour,
        ]}
        title="Project Management"
        icon={iconArchive}
      >
        <MenuItem
          id={SLUGS.projectManagementTwo}
          title="Add Project"
          level={2}
          icon={iconArrowRight}
          onClick={() => onClick(SLUGS.projectManagementTwo)}
        />
        <MenuItem
          id={SLUGS.projectManagementThree}
          title="Add Affiliation"
          level={2}
          icon={iconArrowRight}
          onClick={() => onClick(SLUGS.projectManagementThree)}
        />
        <MenuItem
          id={SLUGS.projectManagementFour}
          title="View All Projects"
          level={2}
          icon={iconArrowRight}
          onClick={() => onClick(SLUGS.projectManagementFour)}
        />
      </MenuItem>
      <MenuItem
        id={SLUGS.centerManagement}
        items={[
          SLUGS.centerManagementTwo,
          SLUGS.centerManagementThree,
          SLUGS.centerManagementFour,
        ]}
        title="Center Management"
        icon={iconGroup}
      >
        <MenuItem
          id={SLUGS.centerManagementTwo}
          title="Add Operational State"
          level={2}
          icon={iconArrowRight}
          onClick={() => onClick(SLUGS.centerManagementTwo)}
        />
        <MenuItem
          id={SLUGS.centerManagementThree}
          title="Add Center Details"
          level={2}
          icon={iconArrowRight}
          onClick={() => onClick(SLUGS.centerManagementThree)}
        />
        <MenuItem
          id={SLUGS.centerManagementFour}
          title="View All Centers"
          level={2}
          icon={iconArrowRight}
          onClick={() => onClick(SLUGS.centerManagementFour)}
        />
      </MenuItem>
      <MenuItem
        id={SLUGS.batchManagement}
        items={[
          SLUGS.batchManagementTwo,
          SLUGS.batchManagementThree,
          SLUGS.batchManagementFour,
          SLUGS.batchManagementFive,
          SLUGS.batchManagementSix,
          SLUGS.batchManagementSeven,
          SLUGS.batchManagementEight,
          SLUGS.batchManagementNine,
        ]}
        title="Batch Management"
        icon={iconBatch}
      >
        <MenuItem
          id={SLUGS.batchManagementTwo}
          title="Generate ABN"
          level={2}
          icon={iconArrowRight}
          onClick={() => onClick(SLUGS.batchManagementTwo)}
        />
        <MenuItem
          id={SLUGS.batchManagementThree}
          title="Add Batch"
          level={2}
          icon={iconArrowRight}
          onClick={() => onClick(SLUGS.batchManagementThree)}
        />
        <MenuItem
          id={SLUGS.batchManagementFour}
          title="Add Photos"
          level={2}
          icon={iconArrowRight}
          onClick={() => onClick(SLUGS.batchManagementFour)}
        />
        <MenuItem
          id={SLUGS.batchManagementFive}
          title="Data Correction"
          level={2}
          icon={iconArrowRight}
          onClick={() => onClick(SLUGS.batchManagementFive)}
        />
        <MenuItem
          id={SLUGS.batchManagementSix}
          title="Data Verification"
          level={2}
          icon={iconArrowRight}
          onClick={() => onClick(SLUGS.batchManagementSix)}
        />
        <MenuItem
          id={SLUGS.batchManagementSeven}
          title="Batch Payment"
          level={2}
          icon={iconArrowRight}
          onClick={() => onClick(SLUGS.batchManagementSeven)}
        />
        <MenuItem
          id={SLUGS.batchManagementEight}
          title="Batch Status Details"
          level={2}
          icon={iconArrowRight}
          onClick={() => onClick(SLUGS.batchManagementEight)}
        />
        <MenuItem
          id={SLUGS.batchManagementNine}
          title="Assessor Details"
          level={2}
          icon={iconArrowRight}
          onClick={() => onClick(SLUGS.batchManagementNine)}
        />
      </MenuItem>
      <MenuItem
        id={SLUGS.profileManagement}
        title="Profile Management"
        icon={iconProfile}
        onClick={() => onClick(SLUGS.profileManagement)}
      />

      <div className={classes.separator}></div>
      <MenuItem
        id={SLUGS.settings}
        title="Settings"
        icon={IconSettings}
        onClick={() => onClick(SLUGS.settings)}
      />

      <MenuItem id="logout" title="Logout" icon={IconLogout} onClick={logout} />
    </Menu>
  );
}

export default SidebarComponent;
