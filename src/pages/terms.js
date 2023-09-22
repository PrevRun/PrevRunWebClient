import React from 'react';

const Terms = () => {
  return (
    <div style={styles.section}>
      <h1>Terms and Conditions</h1>

      <p>Last Updated: 7th September 2023</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using PrevRun (the "Application"), you agree to comply
        with and be bound by these Terms of Service ("Terms"). If you do not
        agree to these Terms, please do not use the Application.
      </p>

      <h2>2. Changes to Terms</h2>
      <p>
        PrevRun ("Company") reserves the right to modify or revise these Terms
        at any time, with or without notice. Your continued use of the
        Application after any changes to the Terms indicates your acceptance of
        the modified Terms.
      </p>

      <h2>3. Description of Service</h2>
      <p>
        The Application provides a SAAS platform to upload and manage your
        videos to platforms like YouTube or Instagram.
      </p>

      <h2>4. User Registration</h2>
      <p>
        To use certain features of the Application, you may be required to
        register for an account. You agree to provide accurate, current, and
        complete information during the registration process and to update such
        information to keep it accurate, current, and complete.
      </p>

      <h2>5. Privacy Policy</h2>
      <p>
        By using the Application, you consent to the terms of the Privacy
        Policy.
      </p>

      <h2>6. User Conduct</h2>
      <p>
        You agree not to:
      </p>
      <ul>
        <li>Use the Application for any unlawful purpose or in violation of any applicable laws or regulations.</li>
        <li>Post, upload, or transmit any content that is illegal, harmful, offensive, or violates the rights of others.</li>
        <li>Attempt to gain unauthorized access to the Application or any user accounts.</li>
        <li>Disrupt or interfere with the security or functionality of the Application.</li>
        <li>Use any automated means to access or scrape data from the Application.</li>
        <li>Impersonate any person or entity, or falsely state or misrepresent your affiliation with a person or entity.</li>
      </ul>

      <h2>7. Intellectual Property</h2>
      <p>
        All content and materials available on the Application, including but
        not limited to text, graphics, logos, images, and software, are the
        property of the Company or its licensors and are protected by
        intellectual property laws.
      </p>

      <h2>8. Termination</h2>
      <p>
        The Company reserves the right to terminate or suspend your access to
        the Application at any time, with or without notice, for any reason,
        including, but not limited to, your breach of these Terms.
      </p>

      <h2>9. Disclaimer of Warranties</h2>
      <p>
        The Application is provided "as is" and "as available" without warranties
        of any kind, either express or implied, including, but not limited to,
        the implied warranties of merchantability, fitness for a particular
        purpose, or non-infringement.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        In no event shall the Company be liable for any direct, indirect,
        incidental, special, consequential, or punitive damages, or any loss of
        profits or revenues, whether incurred directly or indirectly, arising
        from your use of the Application.
      </p>

      <h2>11. Governing Law and Jurisdiction</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of India. Any disputes arising under or in connection with these
        Terms shall be subject to the exclusive jurisdiction of the courts of
        India.
      </p>

      <h2>12. Contact Information</h2>
      <p>
        If you have any questions or concerns regarding these Terms, please
        contact us at <a href="mailto:<something>.com">something@gmail.com</a>.
      </p>

      <h2>13. Entire Agreement</h2>
      <p>
        These Terms constitute the entire agreement between you and the Company
        regarding your use of the Application and supersede all prior agreements
        and understandings.
      </p>

      <h2>14. Effective Date</h2>
      <p>
        These Terms are effective as of the date of your acceptance of these Terms.
      </p>

      <p>
        Please ensure that you consult with legal counsel to adapt this template
        to your specific needs and to ensure it complies with the laws and
        regulations applicable to your jurisdiction and industry.
      </p>
    </div>
  );
};

export default Terms;

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
  a: {
    color: "#007BFF",
    textDecoration: "none",
  }
};
