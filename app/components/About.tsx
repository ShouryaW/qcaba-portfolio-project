import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.description}>
        I am a passionate computer science enthusiast with experience in web
        development, artificial intelligence, and algorithm design.
      </p>
      <p className={styles.contact}>
        Contact me via: <a href="mailto:shouryawalia123@gmail.com">Email</a>
      </p>
    </section>
  );
}
