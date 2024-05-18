import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useInput } from "../../hooks/useInput";
import fakePromise from "../../utils/FakePromise";
import Input from "../utils/Input/Input";
import TypeWriter from "../utils/Typewriter/TypeWriter";
import styles from "./Form.module.scss";

export default function Form() {
  const [loading, setLoading] = React.useState(false);
  const [submited, setSubmited] = React.useState(false);

  const email = useInput("email", "Must be a valid email");
  const name = useInput();

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const emailValid = email.updateValidity();
    const nameValid = name.updateValidity();

    if (emailValid && nameValid) {
      setLoading(true);
      fakePromise(5000).finally(() => {
        setLoading(false);
        setSubmited(true);
      });
    }
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {submited ? (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 100 }}
          className={styles.sent}
          key="sent"
        >
          <motion.h1 className={styles.title}>Sent with success!</motion.h1>
        </motion.div>
      ) : (
        <motion.form
          key="send"
          exit={{
            height: 100,
            overflow: "hidden",
            padding: 0,
          }}
          className={styles.container}
          onSubmit={(event) => submit(event)}
        >
          <h1 className={styles.title}>
            <TypeWriter content="Send a feedback to us!"></TypeWriter>
          </h1>
          <Input placeholder={"Full Name"} label="Name" {...name} />
          <Input placeholder={"email@domain"} label="Email" {...email} />
          <button className={styles.button} disabled={loading}>
            {loading ? "Sending" : "Send"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
