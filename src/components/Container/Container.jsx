import css from "./Container.module.css";
import React from "react";

export default function Container({ children }) {
  return <div className={css.container}>{children}</div>;
}