import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import style from "./Contact.module.css"
import { useSelector } from 'react-redux';
import tick from "../images/tick.png"
import Footer from "../Footer/Footer"
import { NavLink } from 'react-router-dom';
import engin from "../images/TECH (2).png"


const Contact = () => {
    const language = useSelector((state) => state.language);

    const languages = {
      en: {
        message1: "Name",
        message2: "Send",
        message3: "Message",
        message4: "Your name",
        message5: "Your mail",
        message6: "I want work with you!",
        message7: "Thank you for getting in touch with me!",
        message8: "Home",

      },
      tr: {
        message1: "İsim",
        message2: "Gönder",
        message3: "Mesaj",
        message4: "İsminiz",
        message5: "Mailiniz",
        message6: "Sizinle beraber çalışmaktan mutluluk duyarım!",
        message7: "Benimle iletişime geçtiğiniz için tesekkür ederim!",
        message8: "Geri dön",

      },
      es: {
        message1: "Nombre",
        message2: "Enviar",
        message3: "Mensaje",
        message4: "Tu nombre",
        message5: "Tu correo",
        message6: "Quiero trabajar con usted!",
        message7: "Gracias por ponerse en contacto conmigo!",
        message8: "Inicio",

      },
    };
  
    const messages = languages[language];

    const form = useRef();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
      setIsError(false);

      emailjs.sendForm('service_qgzmzkp', 'template_dkmqkqh', form.current, 'raDVxTHuLKbS9Buuq')
        .then((result) => {
          console.log(result.text);
          setIsSuccess(true);
        }, (error) => {
          console.log(error.text);
          setIsError(true);
        });
    };

    return (
      <div className={style.div}>
 
        <a href="/about">
          
    <img className={style.profile} src={engin}/>
    </a>

      <div className={style.contact-form}>

   
      <div style={{ width: "150px", height: "150px", marginTop: "8em"}}>
          <Footer />
          <NavLink to="/home">
          <p className={style.home}>{messages.message8}</p>
        </NavLink>
          </div>
        <form className={style.form} ref={form} onSubmit={sendEmail}>
        

          <label className={style.labelName} htmlFor="user_name">{messages.message1}</label>
          <input className={style.inputName} type="text" name="user_name" id="user_name" required placeholder={messages.message4}/>
          <label className={style.labelEmail} htmlFor="user_email">Email</label>
          <input className={style.inputEmail} type="email" name="user_email" id="user_email" required placeholder={messages.message5}/>
          <label className={style.labelMsg} htmlFor="message">{messages.message3}</label>
          <textarea className={style.texterea} name="message" id="message" required placeholder={messages.message6}/>
          {isError && <div className={style.error}>X</div>}
          {isSuccess && <div className={style.success}><img src={tick}/><p className={style.thanku}>{messages.message7}</p></div>}
          {!isSuccess && !isError && <button className={style.send} type="submit">{messages.message2}</button>}
          
        </form>
      </div>
      </div>
    );
  };

export default Contact;
