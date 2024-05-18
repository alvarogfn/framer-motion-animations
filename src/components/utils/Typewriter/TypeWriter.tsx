import React from "react";
import styles from "./TypeWriter.module.scss";
import { motion, AnimatePresence } from "framer-motion";
interface props {
  content: string;
}

export default function TypeWriter({ content }: props) {
  const [text, setText] = React.useState<string>("");
  const [writing, setWriting] = React.useState<boolean>(true);

  React.useEffect(() => {
    const split = content.split("");

    if (text.length === split.length) return;

    const interval = setInterval(() => {
      const letter = split.shift();

      if (letter === undefined) {
        setTimeout(() => setWriting(false), 200);
        return clearInterval(interval);
      }

      setText((last) => last + letter);
    }, 150);

    return () => clearInterval(interval);
  }, [content, setText]);

  return (
    <span className={`${styles.text}`}>
      {text}
      <AnimatePresence>
        {writing && (
          <motion.div
            exit={{ height: "0" }}
            className={styles.writing}
          ></motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
