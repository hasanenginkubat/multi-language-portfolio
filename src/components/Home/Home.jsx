import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import style from  "./Home.module.css"
import avatar from "../images/avat.jpeg"
import Footer from "../Footer/Footer"
import engin from "../images/engin.jpg"

export default function Home() {
  const language = useSelector((state) => state.language);

  const languages = {
    en: {
      message1: "Contact",
      message2: "About me",
      message3: "Skills",
      message4: "Work",
      message5: "Just live in the moment"
    },
    tr: {
      message1: "İletişim",
      message2: "Hakkımda",
      message3: "Yetenekler",
      message4: "İş",
      message5: "Sadece anı yaşa!"
    },
    es: {
      message1: "Contactos",
      message2: "Sobre mi",
      message3: "Habilidades",
      message4: "Trabajo",
      message5: "Solo vive el momento!"

    },
  };

  const messages = languages[language];

  return (
    <div className={style.all}>


    
    <div className={style.home}>

    <Footer />


    <div className={style.avatar}>

    <img src={avatar} />

    </div>
      <div className={style.contact}>
        <NavLink to="/contact" className={style.navlink}>
          {messages.message1}
        </NavLink>
      </div>
      <div className={style.about}>
        <NavLink to="/about">
          {messages.message2}
        </NavLink>
      </div>
      <div className={style.skills}>
        <NavLink to="/skills">
          {messages.message3}
        </NavLink>
      </div>
      <div className={style.work}>
        <NavLink to="/work">
          {messages.message4}
        </NavLink>
        </div>
      </div>
    </div>
  );
}
