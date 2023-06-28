import React from 'react';
import styles from '../scss/app.module.scss';
import Card from './Card';
import ButtonAdd from './ButtonAdd';
import { useSelector, useDispatch } from 'react-redux';
import { findCardByStatus, addCard, updateStatusCard, removeCard } from '../redux/slices/cardSlice';

export const Column = ({ status: columnStatus, columnTitle, isAddButton }) => {
  const cards = useSelector(findCardByStatus(columnStatus));

  const dispatch = useDispatch();
  const onClickAdd = () => {
    dispatch(addCard());
  };

  const onClickTrash = (id) => {
    dispatch(removeCard({ id }));
  };

  const onClickClock = (id, currentStatus) => {
    const status = currentStatus === 'perform' ? 'execution' : 'done';
    dispatch(updateStatusCard({ id, status }));
    console.log(status);
  };

  const cardsElements = cards.map((card) => (
    <Card
      onClickClock={() => onClickClock(card.id, card.status)}
      onClickTrash={() => onClickTrash(card.id)}
      key={card.id}
      {...card}
    />
  ));
  return (
    <div className={styles.cards__column}>
      <h2 className={styles.cards__title}>{columnTitle}</h2>
      {cardsElements}
      {isAddButton && <ButtonAdd onClick={() => onClickAdd()} />}
    </div>
  );
};
export default Column;
