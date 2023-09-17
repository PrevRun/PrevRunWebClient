/** @jsx jsx */
import { jsx, Box, Grid, Flex, Container, Image, Text } from "theme-ui";
import { motion } from "framer-motion"; // Import motion from framer-motion
import SectionHeading from "components/section-heading";
import { LearnMore } from "components/link";
import app from "assets/images/app.png";
import emoji from "assets/images/icons/emoji.png";
import check from "assets/images/icons/check-circle.png";

const data = [
  {
    id: 1,
    label: "One Click Upload",
  },
  {
    id: 2,
    label: "One Click Approval",
  },
  {
    id: 3,
    label: "Easy Revision Process",
  },
  {
    id: 4,
    label: "No YouTube key Stored",
  },
  {
    id: 5,
    label: "Saves Network Bandwidth",
  },
  {
    id: 6,
    label: "Zero Hidden Charges",
  },
];

const AppFeature = () => {
  return (
    <section sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box sx={styles.rightContent}>
            <motion.div // Wrap the component with motion.div
              initial={{ opacity: 0, y: 20 }} // Set initial properties
              animate={{ opacity: 1, y: 0 }} // Set animate properties
              transition={{ duration: 0.5 }} // Set transition duration
            >
              <SectionHeading
                sx={styles.heading}
                title="Upload content in seconds with one click."
                description="Tired of the hassle of downloading and uploading your videos repeatedly? With Prevrun, you can click a button and seamlessly upload your content, even when you're on the go or boarding a flight. Your time is precious; let us simplify your workflow!"
              />
            </motion.div>
            <Box sx={styles.features}>
              {data?.map(({ id, label }, index) => (
                <motion.div // Wrap the component with motion.div
                  key={id}
                  as="span"
                  sx={{ alignItems: "flex-start" }}
                  initial={{ opacity: 0 }} // Set initial properties
                  animate={{ opacity: 1 }} // Set animate properties
                  transition={{ duration: 0.2 * index }} // Set transition duration
                >
                  <Image src={check} alt="check icon" />
                  <Text as="span">{label}</Text>
                </motion.div>
              ))}
            </Box>
          </Box>

          <Box sx={styles.illustration}>
            <motion.div
              initial={{ x: "30%" }} // Initially, position the image outside the viewport on the right
              animate={{ x: 0 }} // Animate the image to slide in from the right
              transition={{ duration: 0.6 }} // Set the duration of the animation
            >
              <Image src={app} alt="workHard" sx={{ borderRadius: "10px" }} />
            </motion.div>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default AppFeature;

const styles = {
  section: {
    pt: [6, null, null, 9, 7, 4, 9],
    mb: [8, null, null, 11, 10],
  },
  grid: {
    gap: [0, 0, 0, 0, 10, 30],
    display: ["flex", null, null, null, "grid"],
    flexDirection: ["column-reverse", null, null, "column", "row"],
    gridTemplateColumns: ["0.9fr 1.1fr"],
    alignItems: "center",
  },
  heading: {
    maxWidth: ["auto", null, null, "495px", "auto"],
    textAlign: ["center", null, null, null, "left"],
    mb: ["20px"],
    ml: [0],
    h2: {
      color: "heading",
      fontSize: ["24px", null, null, "36px", "31px", 10, 35],
      lineHeight: [1.33, 1.33, 1.26, null, 1.5, 1.26],
      letterSpacing: "-1px",
      letterSpacing: "-1px",
    },
    p: {
      maxWidth: 430,
    },
  },
  features: {
    columnCount: [1, 2],
    lineHeight: 2.81,
    ml: ["20px", 0],
    mt: [null, null, null, 6, 0],
    img: {
      mr: "10px",
      mt: "11px",
    },
    "+ a": {
      mt: "25px",
      ml: ["20px", 0],
    },
  },
  illustration: {
    mb: [3, null, null, 8, 0],
  },
};
