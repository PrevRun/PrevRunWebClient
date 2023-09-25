import React from "react";
import { Box, Container, Grid } from "theme-ui";
import { motion } from "framer-motion";
import SectionHeading from "components/section-heading";
import Accordion from "components/accordion/accordion";
import Image from "components/image";
import messenger from "assets/images/messenger.png";
import { useInView } from 'react-intersection-observer';

const data = [
  {
    title: "Effortless Video Reviews",
    contents: (
      <div>
        Collaborate in real-time with comments and suggestions on your video
        timeline.
      </div>
    ),
  },
  {
    title: `Instant Uploads`,
    contents: (
      <div>
        No more waiting; upload your video directly to YouTube or Instagram with
        a single click.
      </div>
    ),
  },
  {
    title: "Secure and Reliable",
    contents: (
      <div>Your content is encrypted and protected throughout the process.</div>
    ),
  },
  {
    title: "Mobile-Friendly",
    contents: (
      <div>Access Prevrun from anywhere, anytime </div>
    ),
  },
];

const slideInFromLeft = {
  hidden: { opacity: 0, x: "-100%" },
  visible: { opacity: 1, x: 0 },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: 0 },
};

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const PremiumFeature = () => {
  const [imageRef, imageInView] = useInView({ triggerOnce: true });
  const [textRef, textInView] = useInView({ triggerOnce: true });
  const [accordionRef, accordionInView] = useInView({ triggerOnce: true });

  return (
    <section id="features" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <motion.div
            ref={imageRef}
            variants={slideInFromLeft}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            sx={styles.illustration}
          >
            <Image src={messenger} alt="messenger" sx={{ borderRadius: '10px' }} />
          </motion.div>

          <Box sx={styles.rightContent}>
            <motion.div
              ref={textRef}
              variants={slideInFromRight}
              initial="hidden"
              animate={textInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <SectionHeading
                sx={styles.heading}
                title="At PrevRun, we're passionate about revolutionizing the way content creators and editors work together"
                description="To make video collaboration effortless, efficient, and enjoyable for everyone."
              />
            </motion.div>
            <motion.div
              ref={accordionRef}
              variants={fade}
              initial="hidden"
              animate={accordionInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Box sx={styles.accordionGroup}>
                <Accordion items={data} />
              </Box>
            </motion.div>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default PremiumFeature;

const styles = {
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
  },
  grid: {
    alignItems: "center",
    gridTemplateColumns: [
      "1fr",
      null,
      null,
      null,
      "1fr 431px",
      "1fr 530px",
      "1fr 550px",
    ],
  },
  heading: {
    textAlign: ["left", null, null, "center", "left"],
    ml: [null, null, null, "10"],
    maxWidth: [null, null, null, 520, 660],
    h2: {
      fontSize: [null, null, null, 10, 8, 10, 30],
      img: {
        maxWidth: [24, null, null, 30, 25, null, "100%"],
        top: ["4px", "8px", null, null, "4px", "8px"],
      },
    },
    p: {
      fontSize: [null, null, null, 2],
    },
  },
  illustration: {
    mb: [3, null, null, 8, 0],
  },
  accordionGroup: {
    m: [null, null, null, 10], // Added margin for mobile devices
    maxWidth: [null, null, null, 600, "none"],
  },
  
};
