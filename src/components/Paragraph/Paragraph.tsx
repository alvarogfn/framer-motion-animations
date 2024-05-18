import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Social from "../Social/Social";
import styles from "./Paragraph.module.scss";

interface props {
  children: React.ReactNode;
}

export default function Paragraph({ children }: props) {
  const [isSelected, setIsSelected] = React.useState(false);

  const ref = React.useRef(null);

  function hasSelect() {
    const selection = document.getSelection()?.toString();
    if (selection) setIsSelected(true);
  }

  return (
    <div>
      <p ref={ref} onMouseUp={() => hasSelect()} className={styles.paragraph}>
        {children}
      </p>
      <AnimatePresence exitBeforeEnter>
        {isSelected && (
          <motion.div
            className={styles.social}
            initial={{ height: 0 }}
            exit={{ height: 0 }}
            animate={{ height: 50, marginTop: 20 }}
          >
            <Social />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
