import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Loading.module.scss";

interface props {
  loading: boolean;
  children: React.ReactNode;
}

export default function Loading({ loading, children }: props) {
  return (
    <AnimatePresence>
      {loading ? (
        <motion.section
          className={styles.loading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key="loading"
        >
          <div className={styles.letters}>
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
          </div>
        </motion.section>
      ) : (
        children
      )}
    </AnimatePresence>
  );
}
