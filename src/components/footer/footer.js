/** @jsx jsx */
import { jsx, Flex, Box, Text, Container } from "theme-ui";
import { rgba } from "polished";
import Logo from "components/logo";
import Link from "./link";

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container>
        <Flex sx={styles.footerInner}>
          <Flex sx={styles.copyright}>
            <Text as="span">
              &copy; Copyright by {new Date().getFullYear()} Prevrun
            </Text>
          </Flex>
          <Flex sx={styles.link}>
            <Link to="/terms" variant="footer" sx={styles.link}>
              Terms Of Use
            </Link>
            <Box sx={styles.space}></Box>
            <Link to="/privacy" variant="footer" sx={styles.privacyLink}>
              Privacy Policy
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    backgroundColor: "#2B293E",
    pt: [6],
    pb: [6],
  },

  footerInner: {
    justifyContent: ["space-between"],
    alignItems: "center",
    flexDirection: ["column", null, "row"],
  },

  copyright: {
    display: "flex",
    alignItems: ["center", null, "flex-start"],
    span: {
      color: rgba("white", 0.7),
      mb: [3, null, 0],
    },
  },

  link: {
    ml: ["auto", null, 0], // Push links to the right in desktop mode
    mt: [3, null, 0], // Add margin top in responsive mode, remove in desktop mode
    // Center text in responsive mode, align right in desktop mode
    
  },

  link: {
    ml:[3,null,7],
    mr: [3, null, 6], // Add margin right in responsive mode, remove in desktop mode
    textAlign: ["center", null, "right"],
    a: {
      color: "primary", // Change to your primary color
      textDecoration: "none",
      transition: "color 0.3s",
      "&:hover": {
        color: "text",
      },
    },
  },

  space: {
    width: 10,
    mb: [3, null, 0],
  },

  privacyLink: {
    ml: [3, null, 0], // Add margin left for Privacy Policy link
  },
};
