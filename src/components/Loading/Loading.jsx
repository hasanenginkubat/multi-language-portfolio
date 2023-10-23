import React from "react";
import style from "./Loading.module.css";
import load from "../images/gift.gif";
const Loading =  () =>  {
 
    return (
        <div className={style.divContainer}>
          <div className={style.load}>
            <img className={style.img} src={load} alt="loading " />
          </div>
           
            
        </div>
    )

}

export default Loading;