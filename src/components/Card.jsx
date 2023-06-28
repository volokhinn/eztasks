import React from 'react';
import styles from '../scss/app.module.scss';
import pencil from '../icons/pencil.svg';
import trash from '../icons/trash.svg';
import clock from '../icons/clock.svg';
import done from '../icons/done.svg';
import { editCard } from '../redux/slices/cardSlice';
import { useDispatch } from 'react-redux';

export const Card = ({ id, text, status: cardStatus, onClickClock, onClickTrash }) => {
  const dispatch = useDispatch();
  const [area, setArea] = React.useState(text);
  const [isEdit, setIsEdit] = React.useState(false);

  const onClickPencil = () => {
    if (isEdit) {
      setIsEdit(false);
      if (!area.trim()) {
        setArea(text);
        return;
      }
      dispatch(editCard({ id, area }));
      return;
    }

    setIsEdit(true);
  };

  return (
    <div className={styles.cards__item}>
      {!isEdit ? (
        <div className={styles.cards__item_text}>{text}</div>
      ) : (
        <textarea className={styles.textarea} onInput={(e) => setArea(e.target.value)}>
          {area}
        </textarea>
      )}

      <div className={styles.cards__item_icons}>
        {cardStatus === 'perform' ? (
          <img onClick={onClickClock} className={styles.cards__item_icon} src={clock} alt="clock" />
        ) : cardStatus === 'execution' ? (
          <img onClick={onClickClock} className={styles.cards__item_icon} src={done} alt="done" />
        ) : (
          <div></div>
        )}
        <div>
          {cardStatus === 'perform' && (
            <img
              onClick={onClickPencil}
              className={styles.cards__item_icon}
              src={pencil}
              alt="pencil"
            />
          )}
          <img onClick={onClickTrash} className={styles.cards__item_icon} src={trash} alt="trash" />
        </div>
      </div>
    </div>
  );
};

export default Card;
