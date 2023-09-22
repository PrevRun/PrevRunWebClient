/** @jsx jsx */
import { jsx, Flex, Box, Text, Container } from 'theme-ui';
import { rgba } from 'polished';
import Logo from 'components/logo';
import Link from './link'

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container>
        <Flex sx={styles.footerInner}>
          <Flex sx={styles.copyright}>
            <Text as="span">
              &copy; Copyright by {new Date().getFullYear()} PrevRun
            </Text>
            <Flex sx={styles.links}>
              <Link to="/terms" variant="footer">
                Terms Of Use
              </Link>
              <Link to="/privacy" variant="footer">
                Privacy Policy
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}


const styles = {
  footer: {
    backgroundColor: '#2B293E',
    pt: [6],
    pb: [6],
  },
  
  footerInner: { // Add this to center the content horizontally
    justifyContent: 'center',
    alignItems: 'center',
  },

  copyright: {
    display: 'flex',
    alignItems: 'center',
    span: {
      color: rgba('white', 0.7),
      ml: [null, null, null, null, 3], // Adjust margin as needed
    },
  },
};