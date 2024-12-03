import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.name}>
          {Array.from("Shourya Walia").map((char, index) => (
            <span key={index} className={styles.letter} style={{ animationDelay: `${index * 0.1}s` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className={styles.tagline}>QCABA Internship 💻</p>
      </div>
    </section>
  );
}
