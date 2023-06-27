import React from 'react';
import styles from '../scss/app.module.scss';
import Card from './Card';
import ButtonAdd from './ButtonAdd';
import { useSelector, useDispatch } from 'react-redux';
import { findCardByStatus, addCard } from '../redux/slices/cardSlice';


export const Column = ({status, columnTitle, isAddButton}) => {

    const dispatch = useDispatch();
const onClickAdd = () => {
    const newCard = {id: new Date().getTime(), status: 'perform', text: 'Нажмите, чтобы ввести текст'};
    dispatch(addCard(newCard));
}

  const cards = useSelector(findCardByStatus(status));
  const cardsElements = cards.map((obj) => <Card key={obj.id} {...obj} />);
  return (
    <div className={styles.cards__column}>
        <h2 className={styles.cards__title}>{columnTitle}</h2>
        {cardsElements}
        {isAddButton && (
            <ButtonAdd onClick={onClickAdd} />
        )}
    </div>
  )
}
export default Column;
