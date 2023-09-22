/** @jsx jsx */
import { useState, useCallback, useEffect } from 'react';
import { keyframes } from '@emotion/core';
import { jsx, Box, Grid, Container, Flex, Text, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import Switch from 'components/switch';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const data = [
  {
    id: 1,
    title: 'Startup Pack',
    subtitle: 'For influencers who are just beginning and have modest storage needs',
    amount: {
      monthly: 29.99,
      annual: 29.99 * 12 - 10,
    },
    isRecommended: false,
    buttonText: 'Subscribe',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Full access to all premium dashboard features',
      },
      {
        id: 2,
        isAvailable: true,
        title: 'One-click uploads for seamless content sharing',
      },
      {
        id: 3,
        isAvailable: true,
        title: 'Expandable with up to 2 workspaces for superior video organization',
      },
      {
        id: 4,
        isAvailable: true,
        title: 'A generous 50 GB of usable storage space',
      },
      {
        id: 5,
        isAvailable: false,
        title: 'Advanced Collaboration Tools'
      },
      {
        id: 6,
        isAvailable: false,
        title: 'Priority support for prompt assistance',
      },
    ]
    
  },
  {
    id: 2,
    title: 'Premium Pack',
    subtitle: 'For Pro users who simply dont have the time to worry about deleting files.',
    amount: {
      monthly: 49.99,
      annual: 49.99 * 12 - 10,
    },
    isRecommended: true,
    buttonText: 'Subscribe',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Full access to every feature available on the dashboard.',
      },
      {
        id: 2,
        isAvailable: true,
        title: 'one-click uploads for seamless content sharing',
      },
      {
        id: 3,
        isAvailable: true,
        title: 'Elevate your video organization with the option to add up to 10 workspaces!',
      },
      {
        id: 4,
        isAvailable: true,
        title: 'Enjoy a generous 500 GB of usable storage space!',
      },
      {
        id: 5,
        isAvailable: true,
        title: 'Advanced Collaboration Tools',
      },
      {
        id: 6,
        isAvailable: true,
        title: 'Priority support for prompt assistance',
      },
    ],
  },
];

const PriceTableWithMotion = ({ price, isAnnual }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when element comes into view
  });

  useEffect(() => {
    if (inView) {
      // If element is in view, trigger animation here
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.7 }}
      className="priceCard"
      style={{ overflowY: 'hidden' }} // Set overflow-y to hidden
    >
      <PriceTable price={price} isAnnual={isAnnual} />
    </motion.div>
  );
};


const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handlePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Box as="section" id="pricing" sx={{ ...styles.section }}>
    <Container>
        <SectionHeading
          sx={styles.heading}
          title="What deal suit you perfect"
          description="Meet our pricing plan"
        />
        <Flex sx={styles.priceSwitcher}>
          <Text as="span">Monthly Plan</Text>
          <Switch isMonthly={isMonthly} handlePlan={handlePlan} />
          <Text as="span">Annual Plan</Text>
        </Flex>
        <Box sx={styles.priceWrapper}>
          {data?.map((price, index) => (
            <PriceTableWithMotion
              price={price}
              isAnnual={!isMonthly}
              key={`${isMonthly}-${index}`}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [11],
    pb: [11],
  },
  heading: {
    mb: 3,
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  priceSwitcher: {
    display: 'flex',
    alignItems: 'center',
    margin: [
      '35px auto 50px',
      null,
      null,
      '0 auto 30px',
      null,
      '60px auto 50px',
    ],
    maxWidth: 300,
    p: 2,
    span: {
      color: 'text',
      fontWeight: 500,
      outline: 0,
      p: 0,
      minHeight: 'auto',
    },
  },
  priceWrapper: {
    display: ['block', null, null, 'flex'],
    alignItems: 'center',
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 1s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn} 1.1s linear`,
      },
    },
  },
};