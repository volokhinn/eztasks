import React from 'react';
import styles from '../scss/app.module.scss';
import Column from '../components/Column';

const columnsInfo = 
[
  {
  status: 'perform',
  columnTitle: 'Выполнить',
  isAddButton: true,
  },
  {
  status: 'execution',
  columnTitle: 'Выполняется',
  isAddButton: false,
  },
  {
  status: 'done',
  columnTitle: 'Выполнено',
  isAddButton: false,
  },
];

const columns = columnsInfo.map((obj) => <Column key={obj.status} {...obj} /> )

export const Home = () => {
  return (

    <div className={styles.container}>
        <div className={styles.cards}>
            {columns}
        </div>
    </div>
  )
}

export default Home;