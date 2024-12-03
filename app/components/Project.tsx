import styles from '../styles/Project.module.css';

export default function Project() {
  return (
    <section className={styles.project}>
      <div className={styles.logoWrapper}>
        <img
          src="/output-onlinepngtools (1).png"
          alt="QCABA Logo"
          className={styles.logo}
        />
      </div>
      <p className={styles.videoText}>Walkthrough Video</p>
      <div className={styles.videoWrapper}>
        <video
          src="/project-placeholder2.mp4"
          controls
          autoPlay
          muted
          loop
          className={styles.video}
        ></video>
      </div>
      <div className={styles.descriptionWrapper}>
        <h2 className={styles.heading}>Enhancing the QCABA Website:</h2>
        <p className={styles.firstParagraph}>
          This project involved the development of a modern, feature-rich website for the
          <strong className={styles.highlight}> Québec Association of Behavior Analysis (QCABA)</strong>, 
          aimed at improving <strong className={styles.highlight}>user engagement</strong>, 
          streamlining <strong className={styles.highlight}>membership processes</strong>, 
          and promoting <strong className={styles.highlight}>online conferences</strong>. 
          The primary goals were to:
        </p>
        <ul className={styles.list}>
          <li>Increase participation in <strong className={styles.highlight}>online conferences</strong>.</li>
          <li>Clearly communicate <strong className={styles.highlight}>QCABA's mission</strong> and values.</li>
          <li>Deliver an intuitive, <strong className={styles.highlight}>user-friendly experience</strong> for visitors.</li>
        </ul>
        <h3 className={styles.subHeading}>Key Features Implemented</h3>
        <h4 className={styles.subSubHeading}>Membership Management:</h4>
        <ul className={styles.list}>
          <li>
            A new membership system that integrates with <strong className={styles.highlight}>Google Sheets</strong> as a database using 
            <strong className={styles.highlight}> Google Cloud APIs</strong>, ensuring scalability and secure data handling.
          </li>
          <li>
            Password hashing and authentication with <strong className={styles.highlight}>Next.js</strong> and <strong className={styles.highlight}>NextAuth</strong> for secure user login and session management.
          </li>
          <li>
            Membership pages tailored to different types of users with <strong className={styles.highlight}>benefits, prices</strong>, and easy navigation.
          </li>
        </ul>
        <h4 className={styles.subSubHeading}>Checkout System:</h4>
        <ul className={styles.list}>
          <li>
            Implemented a custom checkout page styled to mimic professional platforms like <strong className={styles.highlight}>Shopify</strong>.
          </li>
          <li>
            <strong className={styles.highlight}>Stripe</strong> payment processing integrated directly into the platform for secure and seamless transactions.
          </li>
          <li>
            Dynamic redirects based on user sessions, ensuring a smooth flow from membership selection to payment completion.
          </li>
        </ul>
        <h4 className={styles.subSubHeading}>Profile Management:</h4>
        <ul className={styles.list}>
          <li>Created a profile page where users can view and manage their <strong className={styles.highlight}>membership details</strong> and access exclusive member resources.</li>
        </ul>
        <h4 className={styles.subSubHeading}>Front-End Development:</h4>
        <ul className={styles.list}>
          <li>
            Built a clean and responsive user interface using <strong className={styles.highlight}>React</strong>, 
            <strong className={styles.highlight}> CSS Modules</strong>, and <strong className={styles.highlight}>TypeScript</strong>, ensuring compatibility across devices.
          </li>
          <li>
            Designed engaging pages such as:
            <ul className={styles.nestedList}>
              <li>A new <strong className={styles.highlight}>homepage</strong> to showcase QCABA’s purpose and offerings.</li>
              <li>A comprehensive <strong className={styles.highlight}>About page</strong> to highlight the organization’s mission and team.</li>
              <li>An <strong className={styles.highlight}>Events/Conference page</strong> with easy registration for upcoming conferences.</li>
            </ul>
          </li>
        </ul>
        <h3 className={styles.subHeading}>Technologies and Tools Used</h3>
        <ul className={styles.list}>
          <li>React and Next.js</li>
          <li>TypeScript</li>
          <li>Google Cloud APIs</li>
          <li>Stripe</li>
          <li>CSS Modules</li>
          <li>NextAuth</li>
          <li>Bcrypt</li>
        </ul>
        <h3 className={styles.subHeading}>Outcome and Impact</h3>
        <ul className={styles.list}>
          <li>Increased user registrations for <strong className={styles.highlight}>online conferences</strong>.</li>
          <li>Enhanced clarity around <strong className={styles.highlight}>QCABA’s mission</strong> and benefits.</li>
          <li>Delivered a polished <strong className={styles.highlight}>user experience</strong> that reflects QCABA’s professionalism and commitment to its members.</li>
        </ul>
      </div>
    </section>
  );
}
