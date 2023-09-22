import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={styles.section}>
      <h1>PrevRun Privacy Policy</h1>

      <p>Last Updated: 7th September 2023</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to PrevRun, a video collaboration platform. This Privacy Policy
        explains how PrevRun ("we," "us," or "our") collects, uses, shares, and
        protects your personal information when you use our website, mobile
        applications, and related services (collectively, the "Service").
      </p>
      <p>
        By accessing or using the Service, you agree to the terms of this Privacy
        Policy. If you do not agree with this Privacy Policy, please do not use
        the Service.
      </p>

      <h2>2. Information We Collect</h2>
      <p>a. User-Provided Information:</p>
      <p>
        When you use our Service, you may provide us with certain personal
        information, including but not limited to your name, email address,
        username, and profile picture.
      </p>

      <p>b. Content and Communications:</p>
      <p>
        We collect content and information you submit or share on the Service,
        such as video files, comments, and messages exchanged with other users or
        our support team.
      </p>

      <p>c. Usage Information:</p>
      <p>
        We automatically collect information about your usage of the Service,
        including your device information, IP address, and browser type. We may
        also collect information about your interactions with the Service, such as
        the pages you visit and the features you use.
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>
        We use the information we collect for various purposes, including but not
        limited to:
      </p>
      <ul>
        <li>Providing, maintaining, and improving the Service.</li>
        <li>Personalizing your experience and delivering relevant content.</li>
        <li>Responding to your inquiries, comments, or questions.</li>
        <li>Analyzing usage patterns and trends to enhance our offerings.</li>
        <li>Protecting the security and integrity of our users and the Service.</li>
      </ul>

      <h2>4. Sharing Your Information</h2>
      <p>
        We may share your information with third parties, including:
      </p>
      <ul>
        <li>
          Service Providers: We may share your information with third-party
          service providers who assist us in operating the Service, such as
          hosting, data analysis, and customer support.
        </li>
        <li>
          Legal Compliance: We may share your information as required by law or to
          protect our rights, privacy, safety, or property, and that of our users
          and others.
        </li>
        <li>
          Consent: With your consent, we may share your information with third
          parties for other purposes not specified in this Privacy Policy.
        </li>
      </ul>

      <h2>5. Your Choices</h2>
      <p>
        You have the right to access, correct, or delete your personal
        information. You may also opt-out of certain communications from us.
        Please contact us at [contact email] for assistance with these requests.
      </p>

      <h2>6. Security</h2>
      <p>
        We take reasonable measures to protect your personal information, but no
        data transmission or storage system is completely secure. We cannot
        guarantee the security of your data.
      </p>

      <h2>7. Children's Privacy</h2>
      <p>
        Our Service is not intended for use by children under the age of 13. We
        do not knowingly collect or solicit personal information from children. If
        you believe that we have collected personal information from a child
        under 13, please contact us.
      </p>

      <h2>8. Changes to this Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page. Your
        continued use of the Service after any changes indicates your agreement
        with the updated Privacy Policy.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have any questions or concerns regarding this Privacy Policy,
        please contact us at <a href="mailto:prevrun.inc@gmail.com">prevrun.inc@gmail.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;

const styles = {
  section: {
    backgroundColor: "#FFFCF7",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "1250px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  h2: {
    color: "#333",
    marginBottom: "10px",
  },
  p: {
    color: "#555",
    marginBottom: "15px",
    fontSize: "16px",
  },
  ul: {
    listStyleType: "disc",
    paddingLeft: "20px",
    marginBottom: "15px",
  },
  li: {
    color: "#555",
    fontSize: "16px",
  },
};
