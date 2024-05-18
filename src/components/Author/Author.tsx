import { AnimatePresence } from "framer-motion";
import React from "react";
import picture from "../../assets/author.png";
import AuthorAbout from "../AuthorAbout/AuthorAbout";
import styles from "./Author.module.scss";

export default function Author() {
  const [open, setOpen] = React.useState(false);

  return (
    <section className={styles.container}>
      <section className={styles.author} onClick={() => setOpen(true)}>
        <img className={styles.picture} src={picture} />
        <h1 className={styles.name}>Mikaely Pruska Silva</h1>
        <p className={styles.title}>Editor Core Business System</p>
      </section>
      <AnimatePresence>
        {open && <AuthorAbout controlOpen={setOpen} />}
      </AnimatePresence>
    </section>
  );
}
