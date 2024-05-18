import React from "react";
import landscape from "../../assets/banner.jpg";
import styles from "./Banner.module.scss";

export default function ArticleBanner() {
  return (
    <section className={styles.container}>
      <figure>
        <img src={landscape} alt="A distant landscape in this sea of love" />
        <figcaption>A distant landscape in this sea of love</figcaption>
      </figure>
    </section>
  );
}
