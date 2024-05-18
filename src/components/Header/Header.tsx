import React from "react";
import styles from "./Header.module.scss";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const menuControls = useAnimationControls();

  React.useEffect(() => {
    if (open) menuControls.start({ transform: "rotate(90deg)" });
    else menuControls.start({ transform: "rotate(360deg)" });
  }, [open, menuControls]);

  return (
    <section className={styles.header}>
      <section className={styles.menu}>
        <motion.button
          animate={menuControls}
          className={styles.button}
          onClick={() => setOpen((last) => !last)}
        ></motion.button>
      </section>
      <AnimatePresence>
        {open && (
          <motion.section
            animate={{ height: 200 }}
            exit={{ height: 0 }}
            className={styles.expandedMenu}
          ></motion.section>
        )}
      </AnimatePresence>
    </section>
  );
}
