/** @jsx jsx */
import { jsx, Box, Heading, Text, Button } from 'theme-ui';

const TabContent = ({ tabContent }) => {
  return tabContent.map((item, index) => (
    <Box key={index} sx={styles.tabContent}>
      <Box sx={styles.content}>
        <Heading>{item.title}</Heading>
        <Text as="p">{item.description}</Text>
        <Button onClick={() => window.location.href = 'https://prevrun.net'}>Go To Console</Button>
      </Box>
      <Box sx={styles.imageContainer}>
        <img src={item?.image} alt={item.title} />
      </Box>
    </Box>
  ));
};

export default TabContent;

const styles = {
  tabContent: {
    display: ['flex'],
    flexDirection: ['column-reverse', null, null, null, 'row'],
    alignItems: 'flex-start',
  },
  content: {
    maxWidth: [480, null, null, 580, 480],
    ml: [null, null, null, 'auto', 'unset'],
    mr: [0, null, null, 'auto', 10, 8, 10],
    textAlign: [null, null, null, 'center', 'left'],
    h2: {
      fontWeight: 700,
      fontSize: [6, null, null, 10],
      lineHeight: 1.5,
      letterSpacing: 'heading',
    },
    p: {
      fontSize: [1, null, null, 2],
      lineHeight: [1.8, null, null, 2.2],
      mt: [5],
    },
    button: {
      mt: [6, null, null, null, 7, null, 9],
    },
  },
  imageContainer: {
    borderRadius: '10px',
    minHeight: [256, null, null, 538, 470, 510, 633],
    mb: [5, null, null, null, 0],
    width: '100%',
    overflow: 'hidden',
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
};
