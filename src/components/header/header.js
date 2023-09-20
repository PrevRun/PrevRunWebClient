/** @jsx jsx */
import { jsx, Box, Container, Flex, Button } from "theme-ui";
import Sticky from "react-stickynode";
import { useState } from "react";
import { DrawerProvider } from "contexts/drawer/drawer-provider";
import NavbarDrawer from "./navbar-drawer";
import Image from "components/image";
import Logo from "components/logo";
import prevrunLogo from "assets/images/prevrunLogo.png";


import { NavLink } from "components/link";

import menuItems from "./header.data";
import lock from "assets/images/icons/lock.png";

export default function Header() {
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
  });
  const handleCloseMenu = () => {
    setState({
      ...state,
      isMobileMenu: false,
    });
  };

  return (
    <DrawerProvider>
      <Box sx={styles.headerWrapper}>
        <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={100}>
          <Box
            as="header"
            variant="layout.header"
            className={state.isMobileMenu ? "is-mobile-menu" : ""}
          >
            <Container>
              <Box sx={styles.headerInner}>
              <span
                  sx={{
                    fontSize: "1.4rem", // Adjust the font size as needed
                    fontWeight: "bold", // Add bold styling
                    color: "#FF5733", // Change the color to your preference
                    // Add other styles as desired
                  }}
                >
                {/* <Logo sx={styles.logo} isSticky={state.isSticky} /> */}
                {/* <Image src={prevrunLogo} sx={styles.logo} alt="Previous Run Logo" /> */}
                  PrevRun
                  </span>
                <Flex
                  as="nav"
                  sx={styles.navbar}
                  className={state.isMobileMenu ? "navbar active" : "navbar"}
                >
                  <Box
                    as="ul"
                    sx={styles.navList}
                    className={state.isMobileMenu ? "active" : ""}
                  >
                    {menuItems.map(({ path, label }, i) => (
                      <li key={i}>
                        <NavLink
                          path={path}
                          label={label}
                          onClick={handleCloseMenu}
                        />
                      </li>
                    ))}
                  </Box>
                </Flex>
                <Flex sx={styles.buttonGroup}>
                  <Button
                    variant="text"
                    sx={{
                      ...styles.getStarted,
                      marginLeft: "auto", // Add this line to move the button to the right
                    }}
                    onClick={() => {
                      window.location.href = "http://prevrun.net";
                    }}
                  >
                    Go To Console
                  </Button>
                </Flex>
                <NavbarDrawer />
              </Box>
            </Container>
          </Box>
        </Sticky>
      </Box>
    </DrawerProvider>
  );
}

const styles = {
  headerWrapper: {
    backgroundColor: "transparent",
    header: {
      position: "fixed",
      left: 0,
      right: 0,
      py: [4],
      transition: "all 0.3s ease-in-out 0s",
      "&.is-mobile-menu": {
        backgroundColor: "white",
      },
    },
    ".is-sticky": {
      header: {
        backgroundColor: "white",
        py: ["13px"],
        boxShadow: "0 6px 13px rgba(38,78,118,0.1)",
      },
    },
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // position: ['relative', null, null, 'static'],
  },
  logo: {
    mr: [null, null, null, null, 30, 12],
    maxWidth: "100px",
  },
  navbar: {
    display: ["none", null, null, null, "flex"],
    alignItems: "center",
    // flexGrow: 1,
    justifyContent: "center",
    li: {
      display: "flex",
      alignItems: "center",
      a: {
        cursor: "pointer",
        transition: "all 0.3s ease-in-out 0s",
      },
    },
  },
  navList: {
    display: ["flex"],
    listStyle: "none",
    flexGrow: 1,
    p: 0,
    ".nav-item": {
      cursor: "pointer",
      fontWeight: 400,
      padding: 0,
      margin: [null, null, null, null, "0 15px"],
    },
    ".active": {
      color: "primary",
    },
  },
//   buttonGroup: {
//   position: 'absolute',
//   right: '0',
//   top: '50%',
//   transform: 'translateY(-50%)',
// },
// ...
getStarted: {
  backgroundColor: "#FFF0D7",
  color: "#E6A740",
  p: ["0 16px"],
  minHeight: 45,
  display: ["none", null, null, null, "block"], // Add this line to hide on mobile
},
// ...


  
  //
  menuButton: {
    position: "relative",
    right: "-6px",
    p: 0,
  },
  closeButton: {
    height: "32px",
    padding: "0",
    minHeight: "auto",
    width: "32px",
    position: "relative",
    right: "-10px",
    path: {
      stroke: "text",
    },
  },
};
