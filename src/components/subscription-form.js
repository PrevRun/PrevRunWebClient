import { jsx, Flex, Input, Button, Label } from 'theme-ui';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedFlex = motion.custom(Flex);
const AnimatedInput = motion.custom(Input);
const AnimatedButton = motion.custom(Button);

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setId(Date.now());

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('https://9mgyeggnj7.execute-api.us-east-1.amazonaws.com/lambda-user-dev?type=add_early_access_member', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Email submitted successfully!');
      } else {
        throw new Error('Failed to submit email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the email');
    }
  };

  return (
    <AnimatedFlex
      as="form"
      sx={styles.form}
      initial={{ opacity: 0, y: 20 }} // Initial styles (fade in and slide up)
      animate={{ opacity: 1, y: 0 }} // Animation styles (fade in and slide up)
      transition={{ duration: 0.8, delay: 0.2 }} // Animation duration and delay
      onSubmit={handleFormSubmit} // Add this line to handle form submission
      {...props}
    >
      <Label htmlFor={`email-${id}`} variant="styles.srOnly">
        Email
      </Label>
      <AnimatedInput
        type="email"
        id={`email-${id}`}
        placeholder="Enter Email Id"
        value={email} // Connect the input value to the state
        onChange={(e) => setEmail(e.target.value)} // Update the email state on input change
        initial={{ opacity: 0, x: -20 }} // Initial styles (fade in and slide in from left)
        animate={{ opacity: 1, x: 0 }} // Animation styles (fade in and slide in from left)
        transition={{ duration: 0.8, delay: 0.4 }} // Animation duration and delay
      />
      <AnimatedButton
        type="submit"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        sx={styles.button} // Apply the button styles here
      >
        {isMobile ? 'Submit' : (buttonLabel ?? 'Get Early Access')}
      </AnimatedButton>
    </AnimatedFlex>
  );
};

export default SubscriptionForm;


const styles = {
  form: {
    display: 'flex', // Add this to make form elements inline
    alignItems: 'center', // Align items vertically
    input: {
      minHeight: [50],
      height: 'auto',
      width: 'auto',
      flex: '1', // Take up remaining space
      borderRadius: '10px', // Add border radius
      mr: [2], // Add some margin to the right for spacing between input and button
    },
    button: {
      borderRadius: '10px', // Add border radius
      minHeight: [50],
    },
  },
};
