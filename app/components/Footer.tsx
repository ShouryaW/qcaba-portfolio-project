import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; 2024 Shourya Walia. All rights reserved.
      </p>
      <div>
        <a href="https://github.com/ShouryaW">GitHub</a>
      </div>
    </footer>
  );
}
