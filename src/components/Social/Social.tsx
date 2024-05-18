import React from "react";
import styles from "./Social.module.scss";
import share from "../../assets/share.svg";

export default function Social() {
  return (
    <section className={styles.container}>
      <img className={styles.img} src={share} alt="Share" />
      <p className={styles.paragraph}>
        Share this paragraph with your friends :D
      </p>
    </section>
  );
}
