import React from "react";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from "./About.module.css"
import engin from "../images/engin.jpg"

export default function About() {
    const language = useSelector((state) => state.language);

    const languages = {
      en: {
     message1: "Hello.",
     message2: "My name is Hasan Engin. I am a confident and determined software developer. I also work as a freelancer. My lifelong achievements in attaining what I desire reflect my determination and ability to overcome challenges. I always motivate myself with the following expression: 'Engin, you can achieve what you want.' I believe that I radiate positive energy towards people in my social relationships.In my opinion, a collaborative approach is of great importance. I carefully listen to others, focus on their needs, and establish strong relationships with my colleagues. Additionally, I successfully apply my critical thinking skills to solve complex problems in many projects and do my best to achieve the best results.My discipline is a result of my commitment to completing tasks on time and at a high quality. I always keep my motivation high to reach my goals and place great importance on professional development.In the future, I aspire to work on new and exciting projects. I eagerly anticipate contributing to technological innovations by collaborating with my employers and achieving greater success.",
     message3: "Home",

      },
      tr: {
        message1: "Merhaba.",
        message2: "Benim adım Hasan Engin. Ben özgüveni yüksek ve azimli bir yazılım geliştiriciyim. Ayrıca freelancer olarak çalışıyorum. Arzuladığımı elde etmedeki ömür boyu başarılarım, kararlılığımı ve zorlukların üstesinden gelme yeteneğimi yansıtır. Her zaman kendimi şu ifadeyle motive ederim: 'Engin, istediğini elde edebilirsin.' Sosyal ilişkilerimde insanlara karşı pozitif bir enerji yansıttığımı düşünüyorum. Bana göre işbirlikçi bir yaklaşım büyük önem taşır. Diğerlerini dikkatlice dinler, ihtiyaçlarına odaklanır ve meslektaşlarımla güçlü ilişkiler kurarım. Ayrıca, birçok projede karmaşık sorunları çözmek için eleştirel düşünme becerilerimi başarıyla uygularım ve en iyi sonuçları elde etmek için elimden geleni yaparım. Disiplinim, görevleri zamanında ve yüksek kalitede tamamlama taahhüdümün bir sonucudur. Her zaman hedeflerime ulaşmak için motivasyonumu yüksek tutar ve profesyonel gelişime büyük önem veririm. Gelecekte, yeni ve heyecan verici projelerde çalışmayı arzuluyorum. İşverenimle işbirliği yaparak teknolojik yeniliklere katkıda bulunmayı ve daha büyük başarılar elde etmeyi dört gözle bekliyorum.",
        message3: "Geri dön",
      },
      es: {
        message1: "Holla.",
        message2: "Mi nombre es Hasan Engin. Soy un desarrollador de software seguro y decidido. También trabajo como freelancer. Mis logros de toda la vida en la consecución de lo que deseo reflejan mi determinación y capacidad para superar desafíos. Siempre me motivo a mí mismo con la siguiente expresión: 'Engin, puedes lograr lo que deseas.' Creo que irradian energía positiva hacia las personas en mis relaciones sociales.En mi opinión, un enfoque colaborativo es de gran importancia. Escucho cuidadosamente a los demás, me centro en sus necesidades y establezco relaciones sólidas con mis colegas. Además, aplico con éxito mis habilidades de pensamiento crítico para resolver problemas complejos en muchos proyectos y doy lo mejor de mí para lograr los mejores resultados.Mi disciplina es el resultado de mi compromiso de completar las tareas a tiempo y con alta calidad. Siempre mantengo mi motivación alta para alcanzar mis objetivos y le doy una gran importancia al desarrollo profesional.En el futuro, aspiro a trabajar en proyectos nuevos y emocionantes. Espero con entusiasmo contribuir a las innovaciones tecnológicas colaborando con mis empleadores y alcanzar un mayor éxito.",
        message3: "Inicio",


      },
    };

    const messages = languages[language];



  return (

     <div className={style.all}>


    <div className={style.containerA}>
        
    <a href="/about">
        
     <img className={style.profile} src={engin} />
     </a>
   
    <div className={style.container}>

     <h1 className={style.name}>{messages.message1}</h1>
     
     <p className={style.p1}>{messages.message2}</p>

    </div>


    <NavLink to="/home">
        <p className={style.home}>{messages.message3}</p>    
        </NavLink> 
        

    </div>

    </div>

  );
}
