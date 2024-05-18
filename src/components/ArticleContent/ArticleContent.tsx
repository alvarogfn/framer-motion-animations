import { useAnimationControls, useScroll, motion } from "framer-motion";
import React from "react";
import fakePromise from "../../utils/FakePromise";
import Paragraph from "../Paragraph/Paragraph";
import Loading from "../utils/Loading/Loading";
import SlideInView from "../utils/SlideInView/SlideInView";
import TypeWriter from "../utils/Typewriter/TypeWriter";
import styles from "./ArticleContent.module.scss";

export default function ArticleContent() {
  const [loading, setLoading] = React.useState<boolean>(true);

  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  scrollYProgress.onChange((v) => {
    if (v * 100 > 19) controls.start({ right: 0 });
    else controls.start({ right: -120 });
  });

  React.useEffect(() => {
    fakePromise(6000).finally(() => setLoading(false));
  }, [setLoading]);

  return (
    <div className={styles.container}>
      <Loading loading={loading}>
        <section className={styles.content}>
          <h1 className={styles.title}>
            <TypeWriter content=" Elit laboris Lorem enim incididunt in veniam veniam."></TypeWriter>
          </h1>
          <SlideInView>
            <Paragraph>
              Dolore Lorem anim commodo ut ipsum cupidatat sit veniam amet nulla
              anim sint enim veniam. Excepteur aute reprehenderit exercitation
              quis cillum veniam do laborum qui elit sunt. Tempor reprehenderit
              consequat mollit quis dolor est. Officia deserunt nisi velit
              voluptate consectetur est in fugiat nisi. Proident consectetur
              quis culpa aliqua qui ipsum dolor commodo consectetur consectetur.
              Est aliquip eu deserunt veniam anim voluptate cillum mollit minim
              enim laboris. Qui voluptate voluptate do amet et officia
              adipisicing velit. Sit eu culpa culpa pariatur esse sit id ad
              mollit proident do magna ad occaecat.
            </Paragraph>
          </SlideInView>
          <SlideInView>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem officia eum voluptatibus recusandae reiciendis quo
              sapiente animi adipisci odio provident, praesentium nesciunt nihil
              earum quos vitae eligendi laborum velit? Illo? Tempor quis quis
              enim nulla est dolore do exercitation anim proident in officia
              incididunt. Enim pariatur consectetur irure enim id deserunt.
              Lorem ullamco laboris esse et pariatur adipisicing officia eiusmod
              eu non. Exercitation consequat sunt magna Lorem nulla et ipsum
              laboris fugiat sit ut incididunt et est.
            </Paragraph>
          </SlideInView>
          <SlideInView>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              molestiae officia nostrum fugit in consequatur maiores minus eius
              odit. Repellat a ipsam, ipsum soluta at deleniti voluptatem ab
              eveniet veniam!
            </Paragraph>
          </SlideInView>
          <SlideInView>
            <Paragraph>
              Magna non velit qui elit aliqua officia. Nulla minim adipisicing
              sit minim do ipsum do aliquip laborum incididunt tempor. Non
              deserunt culpa nisi consectetur id ea aliqua. Sit occaecat nulla
              laborum culpa officia sit et adipisicing proident reprehenderit
              amet. Labore velit pariatur nostrud quis cillum.
            </Paragraph>
          </SlideInView>
          <motion.p
            animate={controls}
            transition={{ duration: 0.2 }}
            className={styles.readtime}
          >
            5 min
          </motion.p>
        </section>
      </Loading>
    </div>
  );
}
