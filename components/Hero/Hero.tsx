import React from 'react';
import style from './Hero.module.scss'

export interface HeroProps {

}


const Hero: React.FC<HeroProps> = ({
 
}) => {
 
  return (
    <section className={style.hero}>
      <div className={style.headerContainer}>
        <h2>It's all about you and your baby.</h2>
        <h1><span className={style.heroSpan}>A better birth</span> is done your way.</h1>

        <div className={style.btnContainer}>
          <button className={style.inviteButton}>
            <a href='/'>Schedule a time to meet</a>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;