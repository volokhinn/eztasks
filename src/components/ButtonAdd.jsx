import React from 'react';
import styles from '../scss/app.module.scss';

export const ButtonAdd = ({onClick}) => {
  return (
    <button onClick={onClick} className={styles.button__add}>+</button>
  )
}

export default ButtonAdd;