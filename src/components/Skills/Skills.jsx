import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import robo from "../images/robo.jpg"
import { useSelector } from 'react-redux';
import bootsrap from "../images/bootsrap.png"
import css from "../images/css.png"
import express from "../images/express.png"
import firebase from "../images/firebaseee.png"
import git from "../images/git.png"
import html from "../images/html.png"
import js from "../images/js.jpg"
import mysql from "../images/mysql.png"
import node from "../images/node-js.png"
import postsql from "../images/postgresql.png"
import python from "../images/python.png"
import reactt from "../images/React-icon.svg.png"
import reduxx from "../images/redux (1).png"
import sql from "../images/sequelize.png"
import style from "./Skills.module.css"
import softskil from "../images/softskil.png"
import solving from "../images/problem.png";
import team from "../images/teamWork.png"
import lider from "../images/liderr.jpeg"
import think from "../images/thinkAbout.png"
import moti from "../images/moti.jpg"
import Footer from '../Footer/Footer';
import tech from "../images/TECH (2).png"

export default function Skills() {
    const language = useSelector((state) => state.language);
    const [showTImages, setTShowImages] = useState(false);
    const [showSImages, setSShowImages] = useState(false);

    const showImagesTechHandler = () => {
        setTShowImages(true);
    };

    const showImageSoftHandler = () => {
        setSShowImages(true);
    };

    const closeTImagesHandler = () => {
        setTShowImages(false);
    };
    const closeSImagesHandler = () => {
        setSShowImages(false);
    };


    const languages = {
      en: {
        message1: "My Skills",
        message2: "Technology Skills",
        message3: "Soft Skills",
        message4: "Critical Thinking",
        message5: "Teamwork",
        message6: "Leadership",
        message7: "Problem Solving",
        message8: "Motivation",
        message9: "Home",


        

      },
      tr: {
        message1: "Yeteneklerim",
        message2: "Teknoloji Becerileri",
        message3: "Sosyal Becerileri",
        message4: "Kritik düşünme",
        message5: "Takım çalışması",
        message6: "Liderlik",
        message7: "Problem çözme",
        message8: "Motivasyon",
        message9: "Geri dön",




      },
      es: {
        message1: "Mis Habilidades",
        message2: "Habilidades de Tecnología",
        message3: "Habilidades Sociales",
        message4: "Pensamiento crítico",
        message5: "Trabajo en equipo",
        message6: "Liderazgo",
        message7: "Resolución de problemas",
        message8: "Motivación",
        message9: "Inicio",






      },
    };

    const messages = languages[language];

  return (
    <div style={{ color: "white"}} className={style.container}>

      <h2 style={{marginLeft: "2em"}} className={style.title}>{messages.message1}</h2>
      <img className={style.profile} src={tech} />
      <NavLink to="/home">
        <p  style={{ marginLeft: "100em", position: "absolute", top: "80px"}}className={style.home}>{messages.message9}</p>    
        </NavLink> 

      {!showTImages && !showSImages && 
      <button className={style.buttonRobo} onClick={showImagesTechHandler}>
        <img className={style.roboImg} src={robo} />
      <p  style={{ color: "white"}}>{messages.message2}</p>
      </button>
       }


      {showTImages &&(
        <div className={style.skillsContainer}>
        <button className={style.close} onClick={closeTImagesHandler}>X</button>
        <div className={style.skillsDiv}>
          <img className={style.skillImage} src={bootsrap} alt="Bootstrap" />
          <p>Bootstrap</p>
        </div>
        <div className={style.skillsDiv}>
          <img className={style.skillImage} src={css} alt="CSS" />
          <p>CSS</p>
        </div>
        <div className={style.skillsDiv}>
          <img className={style.skillImage} src={html} alt="HTML" />
          <p>HTML</p>
        </div>
        <div className={style.skillsDiv}>
          <img className={style.skillImage} src={js} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className={style.skillsDiv}>
          <img className={style.skillImage} src={reactt} alt="React" />
          <p>React</p>
        </div>
        <div className={style.skillsDiv}>
          <img className={style.skillImage} src={reduxx} alt="Redux" />
          <p>Redux</p>
        </div>
        <div className={style.skillsDiv}>
          <img className={style.skillImage} src={express} alt="Express.js" />
          <p>Express.js</p>
        </div>
        <div className={style.skillsDiv}>
          <img className={style.skillImage} src={node} alt="Node.js" />
          <p>Node.js</p>
        </div>
        <div className={style.skillsDiv}>
          <img className={style.skillImage} src={python} alt="Python" />
          <p>Python</p>
        </div>
        <div className={style.skillsDiv}>
          <img className={style.skillImage} src={sql} alt="Sequelize" />
          <p>Sequelize</p>
        </div>
        <div className={style.skillsDiv}>
          <img className={style.skillImage} src={mysql} alt="MySQL" />
          <p>MySQL</p>
        </div>
        <div className={style.skillsDiv}>
          <img className={style.skillImage} src={postsql} alt="PostgreSQL" />
          <p>PostgreSQL</p>
        </div>
        <div className={style.skillsDiv}>
          <img className={style.skillImage} src={firebase} alt="Firebase" />
          <p>Fireabase</p>
        </div>
        <div className={style.skillsDiv}>
          <img className={style.skillImage} src={git} alt="Git" />
          <p>Git</p>
        </div>
        </div>
        
        )}
      {!showSImages && !showTImages &&
      <button style={{marginLeft: "52em"}}className={style.buttonRobo} onClick={showImageSoftHandler}>
        <img className={style.roboImg} src={softskil} />
      <p  style={{ color: "white"}}>{messages.message3}</p>
      </button>
       }
   

      {showSImages &&(
        <div style={{marginLeft: "6em"}}className={style.skillsContainer}>
        <button style={{marginRight: "10px"}}className={style.close} onClick={closeSImagesHandler}>X</button>
        <div className={style.skillsDiv}>
          <img style={{ width: "200px", height: "200px"}}className={style.skillImage} src={think} alt="Git" />
          <p>{messages.message4}</p>
        </div>
        <div className={style.skillsDiv}>
          <img style={{ width: "200px", height: "200px"}}className={style.skillImage} src={team} alt="Git" />
          <p>{messages.message5}</p>
        </div>
        <div className={style.skillsDiv}>
          <img style={{ width: "200px", height: "200px"}}className={style.skillImage} src={solving} alt="Git" />
          <p>{messages.message7}</p>
        </div>
        <div className={style.skillsDiv}>
          <img style={{ width: "200px", height: "200px"}}className={style.skillImage} src={lider} alt="Git" />
          <p>{messages.message6}</p>
        </div>
        <div className={style.skillsDiv}>
          <img style={{ width: "200px", height: "200px"}}className={style.skillImage} src={moti} alt="Git" />
          <p>{messages.message8}</p>
        </div>
        </div>
        
        )}
   
      {showTImages ||  !showSImages &&(
          <div style={{alignItems: "center", justifyContent: "center", display: "flex" }}>
          <Footer />
  
          </div>
        
        )}

        
      

    </div>
  );
}
