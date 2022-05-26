import React from 'react';
import style from './AboutMeComp.module.scss'

export interface AboutMeProps {
  
}


const AboutMe: React.FC<AboutMeProps> = ({
 
}) => {
 
  return (
    <section className={style.aboutMe}>

      
      
      <p>I am a strong believer that your birth should be about you and your baby. You are the one going through this process and you shoud be in control and I would love to be your support in this.</p>
    </section>
  );
};
export default AboutMe;