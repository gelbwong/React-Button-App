import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      Created with the guidance of{" "}
      <a href="https://www.shecodes.io" target="_blank" rel="noreferrer">
        SheCodes React
      </a>
      , open sourced on{" "}
      <a
        href="https://github.com/gelbwong/React-Button-App"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://reactbuttonappshecodes.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Netfily
      </a>{" "}
      by{" "}
      <a href="https://github.com/gelbwong" target="_blank" rel="noreferrer">
        Karina Wong
      </a>
    </footer>
  );
}

export default Footer;
