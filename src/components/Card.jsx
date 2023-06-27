import React from 'react';
import styles from '../scss/app.module.scss';
import pencil from '../icons/pencil.svg';
import trash from '../icons/trash.svg';
import clock from '../icons/clock.svg';
import done from '../icons/done.svg';


export const Card = ({text, status}) => {
  return (
    <div className={styles.cards__item}>
    <div className={styles.cards__item_text}>{text}</div>
    <div className={styles.cards__item_icons}>
    {status === 'perform' ?  ( 
      <img className={styles.cards__item_icon} src={clock} alt="clock"/>
    ) : status === 'execution' ? (
      <img className={styles.cards__item_icon} src={done} alt="done"/>
    ) : (<div></div>)}
        <div>
        {status === 'perform' && (
            <img className={styles.cards__item_icon} src={pencil} alt="pencil"/>
        )}
          <img className={styles.cards__item_icon} src={trash} alt="trash"/>
        </div>
    </div>
  </div>
  )
}

export default Card;