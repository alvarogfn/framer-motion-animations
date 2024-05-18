import React from "react";
import ArticleContent from "../ArticleContent/ArticleContent";
import Author from "../Author/Author";
import ArticleBanner from "../Banner/Banner";
import Comments from "../Comments/Comments";
import styles from "./Article.module.scss";

export default function Article() {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <ArticleBanner />
        <div className={styles.author}>
          <Author />
        </div>
      </header>
      <div className={styles.content}>
        <ArticleContent />
      </div>
      <footer className={styles.footer}>
        <Comments />
      </footer>
    </article>
  );
}
