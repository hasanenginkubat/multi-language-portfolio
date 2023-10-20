import React, { useState } from "react";
import dog1 from "../images/dog1.png";
import dog2 from "../images/dog2.png";
import videogame1 from "../images/videogame1.png";
import videogame2 from "../images/videogame2.png";
import { useSelector } from "react-redux";
import style from "./Work.module.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Work() {

  const [currentPage, setCurrentPage] = useState(1); // Başlangıçta 1. sayfa gösterilecek
  library.add(fas);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={style.container}>
     {currentPage === 1 && (
  <div className={style.dog}>

    <img src={dog1} />
    <img src={dog2} />
  </div>
)}

      {currentPage === 2 && (
        <div className={style.videogame}>
          <img src={videogame1} />
          <img src={videogame2} />
        </div>
      )}
          {currentPage === 1 && (
    <div className={style.information}>
        <div>
      <FontAwesomeIcon icon="fas fa-calendar-days" />
      <span>1/6/2023---1/7/2023</span>
      </div>
    </div>

)}
        <div className={style.pageButtons}>
            
        <button onClick={() => handlePageChange(1)}>1. Sayfa</button>
        <button onClick={() => handlePageChange(2)}>2. Sayfa</button>
    
      </div>
    </div>
  );
}
