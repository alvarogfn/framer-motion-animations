import React from "react";
import Article from "./components/Article/Article";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";

export default function App() {

  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.content}>
        <Article />
      </main>
    </div>
  );
}
