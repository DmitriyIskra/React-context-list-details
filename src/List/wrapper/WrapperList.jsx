import React from 'react';
import { useContext } from 'react';
import { v4 } from 'uuid';

import ItemList from '../item/ItemList';

import styles from './css/style.module.css';

import { ListContext } from '../../context/ListContext';

export default function WrapperList() {

  const {list, setId} = useContext(ListContext);

  const getItemId = (e) => setId(e.target.id)

  return (
    <ul className={styles.list} onClick = {getItemId}>
        {list && list.map( item => {
            return (
                <ItemList key={v4()} id={item.id} name={item.name}/>
            )
        } )}
    </ul>
  )
}
