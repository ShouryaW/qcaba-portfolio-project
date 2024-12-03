import styles from '../styles/SourceCode.module.css';

export default function SourceCode() {
  return (
    <section className={styles.sourceCode}>
      <h2 className={styles.heading}>View My Code!</h2>
      <p className={styles.description}>
        Have a look at my project on <strong className={styles.highlight}>GitHub</strong>. Explore the source code and see how it's built!
      </p>
      <a
        href="https://github.com/ShouryaW/qcaba-internship.git"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        View on GitHub
      </a>
    </section>
  );
}
