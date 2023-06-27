import React from 'react';
import styles from '../scss/app.module.scss';
import Card from './Card';
import ButtonAdd from './ButtonAdd';

const cards = [{
    id: 1,
    status: 'perform',
    text: '123123123123123123123',
},
{
    id: 2,
    status: 'execution',
    text: 'sdfsdfsdfsdfsdfsdfsdfsdf',
},
{
    id: 3,
    status: 'done',
    text: 'asdasdasdasdasdasd',
}
]

const cardsElements = cards.map((obj) => <Card {...obj} />);

export const Column = ({status, columnTitle, isAddButton}) => {
  return (
    <div className={styles.cards__column}>
        <h2 className={styles.cards__title}>{columnTitle}</h2>
        {cardsElements}
        {isAddButton && (
            <ButtonAdd />
        )}
    </div>
  )
}
export default Column;
