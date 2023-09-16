/** @jsx jsx */
import { jsx, Box, Container, Grid } from "theme-ui";
import SectionHeading from "components/section-heading";
import Accordion from "components/accordion/accordion";
import Image from "components/image";
import messenger from "assets/images/messenger.png";
import emoji from "assets/images/icons/emoji-2.png";

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
      <div>Access Prevrun from anywhere, even on the go. coming soon" </div>
    ),
  },
];

const PremiumFeature = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            {/* <Image src={messenger} alt="messenger" /> */}
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="At PrevRun, we're passionate about
              revolutionizing the way content 
              creators and editors work together"
              description="To make video collaboration effortless, efficient, and enjoyable for everyone."
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
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
    ml: [null, null, null, "auto"],
    maxWidth: [null, null, null, 520, 660],
    h2: {
      fontSize: [null, null, null, 10, 8, 10, 40],
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
    mb: [-6, null, null, -8, 0],
  },
  accordionGroup: {
    m: [null, null, null, "0 auto", "unset"],
    maxWidth: [null, null, null, 600, "none"],
  },
};
