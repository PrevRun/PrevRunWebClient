// Custom Link Component
import { Link as ThemeUILink } from 'theme-ui';

const Link = ({ to, variant, children }) => {
  return (
    <ThemeUILink href={to} variant={variant}>
      {children}
    </ThemeUILink>
  );
};

export default Link;
