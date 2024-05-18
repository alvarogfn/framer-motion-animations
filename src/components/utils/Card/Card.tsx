import React from "react";
import styles from "./Card.module.scss";

interface props {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className, children }: props) {
  return <div className={`${className} ${styles.container}`}>{children}</div>;
}
