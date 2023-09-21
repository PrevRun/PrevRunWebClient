/** @jsx jsx */
import { jsx, Box, Container, Flex, Button } from "theme-ui";
import Sticky from "react-stickynode";
import { useState } from "react";
import { DrawerProvider } from "contexts/drawer/drawer-provider";
import NavbarDrawer from "./navbar-drawer";
import { NavLink } from "components/link";

import menuItems from "./header.data";
import lock from "assets/images/icons/lock.png";

export default function Header() {
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
    isDrawerOpen: false, // New state to track drawer open/close
  });

  const handleCloseMenu = () => {
    setState({
      ...state,
      isMobileMenu: false,
      isDrawerOpen: false, // Close the drawer
    });
  };

  const handleOpenDrawer = () => {
    setState({
      ...state,
      isDrawerOpen: true, // Open the drawer
    });
  };

  return (
    <DrawerProvider>
      <Box sx={styles.headerWrapper}>
        <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={100}>
          <Box
            as="header"
            variant="layout.header"
            className={`${
              state.isMobileMenu ? "is-mobile-menu" : ""
            } ${state.isDrawerOpen ? "drawer-open" : ""}`}
          >
            <Container>
              <Box sx={styles.headerInner}>
                <span
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "gray",
                    marginRight: "7rem",
                    position: "relative",
                  }}
                >
                  <span
                    sx={{
                      color: "primary",
                      fontSize: "2.2rem",
                      fontFamily: "cursive",
                    }}
                  >
                    P
                  </span>
                  revrun
                  <span className="fiery-effect"></span>
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
                      marginLeft: "auto",
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
      <Box
          className={`drawer-backdrop ${state.isDrawerOpen ? "show" : ""}`}
      ></Box>
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
  },
  logo: {
    mr: [null, null, null, null, 30, 12],
    maxWidth: "100px",
  },
  navbar: {
    display: ["none", null, null, null, "flex"],
    alignItems: "center",
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
      padding: 0,
      margin: [null, null, null, null, "0 15px"],
      position: "relative",
      "& a": {
        transition: "color 0.3s ease-in-out",
      },
      "&.active": {
        color: "primary",
        "&::after": {
          content: '""',
          width: "8px",
          height: "8px",
          background: "gray",
          borderRadius: "50%",
          position: "absolute",
          bottom: "-10px",
          left: "50%",
          transform: "translateX(-50%)",
          transition: "transform 0.3s ease-in-out",
        },
      },
      "&:hover a": {
        color: "primary",
      },
    },
  },
  getStarted: {
    backgroundColor: "#FFF0D7",
    color: "#E6A740",
    p: ["0 16px"],
    minHeight: 45,
    display: ["none", null, null, null, "block"],
  },
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
  drawerBackdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(8px)",
    zIndex: 99,
    display: "none",
  },
};

// Custom CSS for fiery effect
const customCSS = `
.fiery-effect {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 100%;
  background: radial-gradient(circle, #FF5733 0%, rgba(255, 87, 51, 0) 80%);
  pointer-events: none;
  animation: fieryEffect 1.5s infinite alternate;
}

@keyframes fieryEffect {
  0% {
    opacity: 0.6;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.2);
  }
}
`;

export { customCSS };
