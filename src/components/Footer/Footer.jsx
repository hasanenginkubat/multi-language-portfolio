// Footer.jsx
import React from "react";
import instagram from "../images/instagram.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import gmail from "../images/gmail.png"
import style from "./Footer.module.css";
import { useSelector } from "react-redux";
export default function Footer() {


    const language = useSelector((state) => state.language);
    const languages = {
        en: {
          message5: "Just live in the moment"
        },
        tr: {
          message5: "Sadece anı yaşa!"
        },
        es: {
          message5: "Solo vive el momento!"
    
        },
      };
    
      const messages = languages[language];

  return (
    <div className={style.footer}>
      <div className={style.socialLinks}>
     
        <a href="https://github.com/hasanenginkubat">
          <img className={style.git} src={github} alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/hasanenginkubat/">
          <img className={style.inst} src={instagram} alt="Instagram" />
        </a>
        <a href="mailto:kubathasanengin@gmail.com">
      <img className={style.mail} src={gmail} alt="Gmail" />
        </a>
        <a href="https://www.linkedin.com/in/hasan-engin-kubat-621173255/">
          <img className={style.lin} src={linkedin} alt="LinkedIn" />
        </a>
        <p className={style.copyright}>&copy; HEKTECH.</p>
        <div className={style.italic}>

        <p className={style.message5}>{messages.message5}</p>
        </div>
      
      </div>
   
    </div>
  );
}
