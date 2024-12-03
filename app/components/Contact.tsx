import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2>Contact Me</h2>
      <form className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.submit}>
          Send Message
        </button>
      </form>
      <p className={styles.altContact}>
        Or reach out via: <a href="mailto:shouryawalia123@gmail.com">Email</a>
      </p>
    </section>
  );
}
