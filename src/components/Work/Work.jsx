import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import style from "./Work.module.css";
import dog1 from "../images/dog1.png";
import dog2 from "../images/dog2.png";
import videogame1 from "../images/videogame1.png";
import videogame2 from "../images/videogame2.png";
import pf1 from "../images/pf1.png"
import pf2 from "../images/pf2.png"
import pf3 from "../images/pf3.png"
import pf4 from "../images/pf4.png"
import react from "../images/React-icon.svg.png";
import postgres from "../images/postgresql.png";
import sql from "../images/sequelize.png"
import redux from "../images/redux (1).png"
import javascript from "../images/js.jpg"
import nodejs from "../images/node-js.png"
import firebase from "../images/firebaseee.png"
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import engin from "../images/TECH (2).png"
import Loading from "../Loading/Loading";

library.add(fas);

export default function Work() {
  const [carga, setCarga] = useState(true);


  const language = useSelector((state) => state.language);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarga(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const languages = {
    en: {
      message1: "PF HENRY & CO.",
      message2: "1/6/2023",
      message3: "1/7/2023",
      message4: "2/7/2023",
      message5: "2/8/2023",
      message6: "4/7/2023",
      message7: "7/9/2023",
      message8: "Viki-dog",
      message9: `Viki-dog is a platform that provides a rich dog database, allowing users to easily search for dogs based on their breed, size, and characteristics, and discover adorable dog pictures. Additionally, users can create their dream dogs.

      To access the platform, you can use the username 'kubathasanengin@gmail.com' and the password '123'. This enables dog enthusiasts to quickly find dogs with the desired breed and features. Viki-dog offers easy access to information and photos about dogs, allowing users to explore the world of dogs.`,
      message10: `Viki-videogame is a platform that offers an extensive database of video games, allowing users to search and discover games based on their genre and rating. Additionally, users have the ability to create their own games if they don't find what they're looking for.

      To access the platform, you can use the username 'kubathasanengin@gmail.com' and the password '123'. Viki-videogame provides easy access to game information and images, enabling users to explore the world of video games.`,     
      message11: "Viki-dog",
      message12: "Viki-videogame",
      message13: `PF Henry & Co. is a platform that offers the option to log in with Facebook and Google using UI/UX. Users can edit their profiles as they wish and store their photos. Additionally, it provides product inventory, user shopping carts, and PayPal integration for payments. Administrators can ban users as needed, and users can cancel the products they have purchased. This platform prioritizes user freedom and convenience while also providing the necessary controls for administrators.`,
      message14: "View project",
      message15: "Home",
      message16: "Projects"



    },
    tr: {
      message1: "PF HENRY & CO.",
      message2: "1/6/2023",
      message3: "1/7/2023",
      message4: "2/7/2023",
      message5: "2/8/2023",
      message6: "4/7/2023",
      message7: "7/9/2023",
      message8: "Viki-dog",
      message9: `Viki-dog, zengin bir köpek veritabanı sunarak kullanıcıların köpekleri tür, boyut ve özelliklerine göre kolayca arayabilecekleri ve sevimli köpek resimleri keşfedebilecekleri bir platformdur. Aynı zamanda, kullanıcılar hayallerindeki köpekleri oluşturabilirler.

      Platforma erişim için kullanıcı adı 'kubathasanengin@gmail.com' ve şifre '123' kullanılabilir. Bu sayede, köpek severler hızlıca istedikleri tür ve özelliklere sahip köpekleri bulabilirler. Viki-dog, köpeklerle ilgili bilgilere ve fotoğraflara kolay erişim sunarak kullanıcıların köpek dünyasını keşfetmelerini sağlar.
      `,
      message10: `Viki-videogame, zengin bir videogame veritabanı sunarak kullanıcıların oyunları tür, raiting göre arıyabilicekleri ve keşfedebilicekleri platformdur.Aynı zamanda kullanıcılar istedikleri oynu bulamazlarsa bunu kendileri yaratabilirler

      Platforma erişim için kullanıcı adı 'kubathasanengin@gmail.com' ve şifre '123' kullanılabilir. Viki-videogame, oyunlarla ilgili bilgileri ve fotoğraflara kolay erişim sunarak kullanıcıların oyun dünyasını keşfetmelerini sağlar.`,     

      message11: "Viki-dog",
      message12: "Viki-videogame",
      message13: `PF Henry & Co. UI/UX kullanarak , Facebook ve Google ile giriş yapma seçeneğine sahip bir platformdur. Kullanıcılar, kendi profillerini istedikleri gibi düzenleyebilirler ve fotoğraflarını saklayabilirler. Ayrıca, ürün stoğu, kullanıcı sepetleri ve ödeme için PayPal entegrasyonu sunar. Yöneticiler istedikleri kullanıcıları yasaklayabilir ve kullanıcılar aldıkları ürünleri iptal edebilirler. Bu platform, kullanıcıların özgürlüğünü ve kolaylığı ön planda tutar, aynı zamanda yöneticilerin de gerekli kontrolleri sağlar.`,
      message14: "Projeyi gör",
      message15: "Geri dön",
      message16: "Projeler"







    },
    es: {
      message1: "PF HENRY & CO.",
      message2: "1/6/2023",
      message3: "1/7/2023",
      message4: "2/7/2023",
      message5: "2/8/2023",
      message6: "4/7/2023",
      message7: "7/9/2023",
      message8: "Viki-dog",
      message9: `Viki-dog es una plataforma con una amplia base de datos de perros que permite a los usuarios buscar perros por raza, tamaño y características, y descubrir imágenes encantadoras. También pueden crear perros personalizados.

      Puedes acceder a la plataforma con el nombre de usuario 'kubathasanengin@gmail.com' y la contraseña '123'. De esta manera, los amantes de los perros pueden encontrar rápidamente perros con las características deseadas y explorar el mundo canino.`,     
      message10: `Viki-videogame, un plataforma que ofrece una extensa base de datos de videojuegos, permitiendo a los usuarios buscar y descubrir juegos según su género y calificación. Además, los usuarios tienen la capacidad de crear sus propios juegos si no encuentran lo que buscan.

      Para acceder a la plataforma, se puede utilizar el nombre de usuario 'kubathasanengin@gmail.com' y la contraseña '123'. Viki-videogame proporciona un acceso fácil a la información de los juegos y las imágenes, permitiendo a los usuarios explorar el mundo de los videojuegos.`,     
      message11: "Viki-dog",
      message12: "Viki-videogame",
      message13: `PF Henry & Co. es una plataforma que ofrece la opción de iniciar sesión con Facebook y Google utilizando UI/UX. Los usuarios pueden editar sus perfiles como deseen y almacenar sus fotos. Además, proporciona inventario de productos, carritos de compra de usuarios e integración de PayPal para pagos. Los administradores pueden prohibir usuarios según sea necesario, y los usuarios pueden cancelar los productos que han comprado. Esta plataforma prioriza la libertad y comodidad del usuario, al mismo tiempo que proporciona los controles necesarios para los administradores.`,
      message14: "Ver proyecto",
      message15: "Inicio",
      message16: "Projectos"

    },
  };
  
  const project3 = {

    imageUrl1: dog2,
    imageUrl2: dog1,
  };

  const project2 = {
    imageUrl1: videogame1,
    imageUrl2: videogame2,
  };

  const project1 = {
    imageUrl1: pf3,
    imageUrl2: pf1,
    imageUrl3: pf2,
    imageUrl4: pf4,
  };

  const messages = languages[language];

  if (carga) {
    return (
     <Loading/>   
    )
  }

  return (
    <div className={style.all}>
     
      <div className={style.container}>
      {carga ? (
        <Loading />
      ) : (
        <div className={style.projects}>
        <NavLink to="/home">
        <p  style={{ position: "relative", right: "376px"}}className={style.home}>{messages.message15}</p>    
        </NavLink> 

        <a href="/about">
          
    <img className={style.profile} src={engin} alt="engin"/>
    </a>
    <h1 className={style.h1p} style={{ position: "relative", left: "300px", top: "-100px"}}>{messages.message16}</h1>

        <div className={style.project}>
  <a href="https://pf-gafas.web.app/">
    <div className={`${style.projectContent} ${style.project1}`}>
      <img className={style.img} src={project1.imageUrl1} alt={project1.title} />
      <div className={style.projectDetails}>
        <h2>{messages.message1}</h2>
        <div className={style.imagenes}>
          <img src={project1.imageUrl2} alt='png'/>
          <img src={project1.imageUrl3} alt='png'/>
          <img src={project1.imageUrl4} alt='png'/>
        </div>
        <div className={style.information}>
          <div>
            <FontAwesomeIcon icon="fas fa-calendar-days" />
            <span>
              -{messages.message6} - {messages.message7}
            </span>
          </div>
          <a href="https://pf-gafas.web.app/" className={style.deployButton}>
            {messages.message14}
          </a>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <FontAwesomeIcon icon="fa-solid fa-microchip" />
        
            </div>
            <img style={{ width: "20px", margin: "5px" }} src={react} alt='png' />
            <img style={{ width: "17px", margin: "5px" }} src={firebase} alt='png' />
            <img style={{ width: "20px", margin: "5px" }} src={redux} alt='png'/>
            <img style={{ width: "20px", margin: "5px" }} src={javascript} alt='png'/>
          </div>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-audio-description" />
            <div></div>
            <p className={style.descripiton}>{messages.message13}</p>
          </div>
        </div>
      </div>
    </div>
  </a>
</div>


          <div className={style.project}>

          <a href="https://pi-videogames-d36ef5ggb-hasanenginkubat.vercel.app">
            <div className={`${style.projectContent} ${style.project2}`}>
              <img className={style.img} src={project2.imageUrl1} alt={project2.title} />
              <div className={style.projectDetails}>
                <h2>{messages.message12}</h2>
                <div className={style.information}>
                  <div>
                  <div className={style.imagenes}>
                      <img src={project2.imageUrl2} alt='png' />
                     </div>
                    <FontAwesomeIcon icon="fas fa-calendar-days" />
                    <span>
                    -{messages.message4} - {messages.message5}
                    </span>
                    
                  </div>
                  <a href="https://pi-videogames-d36ef5ggb-hasanenginkubat.vercel.app" className={style.deployButton}>
            {messages.message14}
          </a>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div>
                 <FontAwesomeIcon icon="fa-solid fa-microchip" />
                </div>
               <img style={{ width: "20px", margin: "5px" }} src={react} alt='png'/>
                <img style={{ width: "20px", margin: "5px" }} src={postgres} alt='png'/>
                <img style={{ width: "20px", margin: "5px" }} src={sql} alt='png'/>
                <img style={{ width: "20px", margin: "5px" }} src={redux} alt='png'/>
                <img style={{ width: "20px", margin: "5px" }} src={javascript} alt='png'/>
                <img style={{ width: "35px", margin: "5px" }} src={nodejs} alt='png'/>


               </div>
               <div>
                                   
              <FontAwesomeIcon icon="fa-solid fa-audio-description" />
              <div>
              </div>     
              <p className={style.descripiton}>{messages.message10}</p>
              </div>     
                </div>
              </div>

            </div>
            </a>

          </div>

          <div className={style.project}>

          <a href="https://client-3iscbqc43-hasanenginkubat.vercel.app/">

            <div className={`${style.projectContent} ${style.project3}`}>

              <img className={style.img} src={project3.imageUrl1} alt={project3.title} />
  

              <div className={style.projectDetails}>

                <h2>{messages.message11}</h2>

                <div className={style.information}>
                  <div>
   

                     <div className={style.imagenes}>
                      <img src={dog1} alt='png'/>
                     </div>
                    <FontAwesomeIcon icon="fas fa-calendar-days" />
                    <span>
                    -{messages.message2} - {messages.message3}
                    </span>
                  </div>
                  <a href="https://client-3iscbqc43-hasanenginkubat.vercel.app/" className={style.deployButton}>
            {messages.message14}
          </a>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div>
                 <FontAwesomeIcon icon="fa-solid fa-microchip" />
                </div>

               <img style={{ width: "20px", margin: "5px" }} src={react} alt='png'/>
                <img style={{ width: "20px", margin: "5px" }} src={postgres} alt='png'/>
                <img style={{ width: "20px", margin: "5px" }} src={sql} alt='png'/>
                <img style={{ width: "20px", margin: "5px" }} src={redux} alt='png'/>
                <img style={{ width: "20px", margin: "5px" }} src={javascript} alt='png'/>
                <img style={{ width: "35px", margin: "5px" }} src={nodejs} alt='png'/>


               </div>

               <div>
                                   
               <FontAwesomeIcon icon="fa-solid fa-audio-description" />
               <div>
               </div>     
               <p className={style.descripiton}>{messages.message9}</p>
               </div>                
               </div>

              </div>
              
            </div>
            </a>

          </div>
        </div>
         )}
      </div>
     
      <div>         
          <Footer />
          </div>    
    </div>
  );
}
