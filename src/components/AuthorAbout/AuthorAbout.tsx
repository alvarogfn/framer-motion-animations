import React from "react";
import styles from "./AuthorAbout.module.scss";
import { motion } from "framer-motion";

interface props {
  controlOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthorAbout({ controlOpen }: props) {
  return (
    <motion.section
      animate={{ top: 0, opacity: 1 }}
      initial={{ top: -20, opacity: 0 }}
      exit={{
        top: -20,
        opacity: 0,
        height: 0,
        marginBottom: 0,
        marginTop: 0,
        padding: 0,
      }}
      className={styles.container}
    >
      <h2 className={styles.h2}>About Mikaely Pruska Silva: </h2>
      <p className={styles.about}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad magnam
        similique deserunt. Aperiam vero maiores architecto placeat, nihil
        libero omnis tenetur quis fugit quisquam aliquid harum magni corporis
        voluptatum. Magni.
      </p>
      <button
        className={styles.button}
        onClick={() => {
          controlOpen(false);
        }}
      >
        <span>X</span>
      </button>
    </motion.section>
  );
}
