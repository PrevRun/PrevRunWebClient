import { jsx, Flex, Input, Button, Label } from 'theme-ui';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AnimatedFlex = motion.custom(Flex);
const AnimatedInput = motion.custom(Input);
const AnimatedButton = motion.custom(Button);

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      toast.error('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://apis.prevrun.net/lambda-user-prod?type=add_early_access_member', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success('Email submitted successfully!', { className: 'success-toast' });
      } else {
        throw new Error('Failed to submit email');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while submitting the email');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        pauseOnHover={false}
        transition={Slide}
        closeOnClick={true}
        theme="light"
      />
      <AnimatedFlex
        as="form"
        sx={styles.form}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        onSubmit={handleFormSubmit}
        {...props}
      >
        <Label htmlFor={`email-${id}`} variant="styles.srOnly">
          Email
        </Label>
        <AnimatedInput
          type="email"
          id={`email-${id}`}
          placeholder="Enter Email Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <AnimatedButton
          type="submit"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          sx={styles.button}
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : isMobile ? 'Submit' : buttonLabel ?? 'Get Early Access'}
        </AnimatedButton>
      </AnimatedFlex>
    </>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    display: 'flex',
    alignItems: 'center',
    input: {
      minHeight: [50],
      height: 'auto',
      width: 'auto',
      flex: '1',
      borderRadius: '10px',
      mr: [2],
    },
    button: {
      borderRadius: '10px',
      minHeight: [50],
    },
  },
};
