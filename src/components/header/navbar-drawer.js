/** @jsx jsx */
import { jsx, Box, Image, Button, MenuButton } from "theme-ui";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import { rgba } from "polished";
import { DrawerContext } from "contexts/drawer/drawer-context";
import Drawer from "components/drawer";
import Logo from "components/logo";
import menuItems from "./header.data";
import close from "assets/images/icons/close.png";

const NavbarDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  useEffect(() => {
    setIsDrawerOpen(state?.isOpen);
  }, [state]);

  return (
    <Drawer
      width="340px"
      placement="right"
      drawerHandler={
        <Box sx={styles.handler}>
          <MenuButton />
        </Box>
      }
      open={state?.isOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <button sx={styles.closeButton}>
          <Image src={close} alt="close" />
        </button>
      }
      maskStyle={styles.mask}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Box sx={styles.wrapper}>
        <Box
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "gray",
            marginLeft: "1em",
            marginRight: "7rem",
            display: "flex",
            alignItems: "baseline",
          }}
        >
          <Box
            sx={{
              color: "primary",
              fontSize: "2.2rem",
              // fontFamily: "cursive",
            }}
          >
            P
          </Box>
          revrun
        </Box>
        <Box as="ul" sx={styles.navbar}>
          {menuItems.map(({ path, label }, i) => (
            <Box as="li" key={i}>
              <Link
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleHandler}
              >
                {label}
              </Link>
            </Box>
          ))}
        </Box>
        <Button
          variant="primary"
          sx={styles.donateNow}
          onClick={() => {
            window.location.href = "http://prevrun.net";
          }}
        >
          Go To Console
        </Button>
      </Box>
    </Drawer>
  );
};

export default NavbarDrawer;

const styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",
    cursor: "pointer",
    "@media screen and (min-width: 1024px)": {
      display: "none",
    },
  },
  drawer: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    outline: 0,
  },
  mask: {
    opacity: 0.2,
  },
  close: {
    position: "absolute",
    top: 35,
    right: 30,
    zIndex: "1",
  },
  closeButton: {
    alignItems: "center",
    backgroundColor: "transparent",
    border: 0,
    cursor: "pointer",
    display: "flex",
    p: 0,
  },
  wrapper: {
    height: "100%",
    paddingTop: 30,
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    ml: 30,
    mb: 45,
  },
  navbar: {
    listStyle: "none",
    m: 0,
    p: 0,
    "li > a": {
      backgroundColor: "transparent",
      borderTop: (t) => `1px solid ${t.colors.borderColor}`,
      color: rgba("#02073E", 0.4),
      display: "flex",
      alignItems: "center",
      fontWeight: 500,
      minHeight: 44,
      marginLeft: 6,
      position: "relative",
      transition: "all 0.3s ease-in-out 0s",
    },
    "li:last-child > a": {
      borderBottom: (t) => `1px solid ${t.colors.borderColor}`,
    },
    ".active": {
      color: "primary",
    },
    mt: "1em",
  },
  donateNow: {
    fontSize: 1,
    minHeight: 45,
    margin: "auto 30px 40px",
  },
};
