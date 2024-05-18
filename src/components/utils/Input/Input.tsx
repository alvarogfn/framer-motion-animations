import React from "react";
import styles from "./Input.module.scss";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

interface props {
  label: string;
  value: string;
  isValid: boolean;
  error: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export default function Input({
  label,
  value,
  error,
  onChange,
  placeholder,
  isValid,
}: props) {
  const controls = useAnimationControls();

  React.useEffect(() => {
    if (!isValid) {
      const transition = { duration: 0.4 };
      controls.start({ x: [null, 5, -5, 2.5, -2.5, 0], transition });
    }
  }, [isValid, error]);

  return (
    <motion.label
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={styles.label}
    >
      {label}
      <motion.input
        className={`${styles.input} ${!isValid && styles.inputError}`}
        placeholder={placeholder}
        initial={{ x: 0 }}
        animate={controls}
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
      />
      <AnimatePresence exitBeforeEnter>
        {!isValid && (
          <motion.span
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ x: 10, opacity: 0 }}
            key={error}
            className={styles.error}
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.label>
  );
}
