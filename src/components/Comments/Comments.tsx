import React from "react";
import SlideInView from "../utils/SlideInView/SlideInView";
import styles from "./Comments.module.scss";
import ballon from "../../assets/comment.svg";
import { AnimatePresence, motion } from "framer-motion";
import Loading from "../utils/Loading/Loading";
import Form from "../Form/Form";
import fakePromise from "../../utils/FakePromise";

export default function Comments() {
  const [open, setOpen] =  React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (open) setLoading(true);
    fakePromise(4000).finally(() => setLoading(false));
  }, [open, setLoading]);

  return (
    <SlideInView>
      <section className={styles.container}>
        <AnimatePresence>
          {!open && (
            <motion.button
              exit={{ height: 0, padding: 0, margin: 0, y: -20 }}
              className={styles.button}
              onClick={() => setOpen(true)}
            >
              <img className={styles.svg} src={ballon} alt="Comments" />
            </motion.button>
          )}
        </AnimatePresence>
        {open && (
          <motion.section
            initial={{ height: "0%", y: -30 }}
            animate={{ height: "100%", y: 0 }}
            className={styles.form}
          >
            <Loading loading={loading}>
              <motion.div
                initial={{ opacity: 0, height: "0%", width: "0%" }}
                animate={{ opacity: 1, height: "100%", width: "100%" }}
              >
                <Form />
              </motion.div>
            </Loading>
          </motion.section>
        )}
      </section>
    </SlideInView>
  );
}
