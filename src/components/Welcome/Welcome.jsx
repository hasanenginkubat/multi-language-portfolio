import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLanguage } from "../redux/actions";
import turkish from "../images/trr.png"
import ispanyolca from "../images/ess.png"
import ingilizce from "../images/en.png"
import style from "./Welcome.module.css"
import engin from "../images/TECH (2).png"

export default function Welcome() {



  const dispatch = useDispatch();
  const navigate = useNavigate();

  const languages = [
    { code: "en", welcomeMessage: "© HEKTECH.", skip: "Please select your language to proceed.", img: ingilizce },
    { code: "tr", welcomeMessage: "© HEKTECH.", skip: "İlerlemek için lütfen dilinizi seçiniz.", img: turkish },
    { code: "es", welcomeMessage: "© HEKTECH.", skip: "Por favor, elige tu idioma para continuar.", img: ispanyolca },
  ];
  
  const [visibleButtonIndex, setVisibleButtonIndex] = useState(0);

  const handleChangeLanguage = (language) => {
    dispatch(changeLanguage(language.code));
    navigate("/home");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleButtonIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    
    <div className={style.welcomeHead}>

      <img className={style.profile} src={engin}/>

      {languages.map((language, index) => (

        <div className={style.map} key={language.code} style={{ display: index === visibleButtonIndex ? "block" : "none" }}>

                    <h1 className={style.welcomeMes}>{language.welcomeMessage}</h1>

          <div className={style.imagesContainer}>

          </div>

        </div>
      ))}          

       <div>

        <button className={style.button} onClick={() => handleChangeLanguage(languages[1])}>
        <img src={languages[1].img} alt={languages[1].code} />
        {languages.map((language, index) => (
        <div key={language.code} style={{ display: index === visibleButtonIndex ? "block" : "none" }}>
          <h3>İlerlemek için lütfen dilinizi seçiniz.</h3>
        </div>
      ))}
   
        </button>
        <button className={style.button} onClick={() => handleChangeLanguage(languages[0])}>
        <img src={languages[0].img} alt={languages[0].code} />
        {languages.map((language, index) => (
        <div key={language.code} style={{ display: index === visibleButtonIndex ? "block" : "none" }}>
          <h3>Please select your language to proceed.</h3>
        </div>
      ))}
        </button>
 
        <button className={style.button} onClick={() => handleChangeLanguage(languages[2])}>
        <img src={languages[2].img} alt={languages[2].code} />
        {languages.map((language, index) => (
        <div key={language.code} style={{ display: index === visibleButtonIndex ? "block" : "none" }}>
          <h3>Por favor, elige tu idioma para continuar.</h3>
        </div>
      ))}

       </button>
    </div>
    </div>
    
  );
  
}
