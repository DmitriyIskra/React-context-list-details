import React from 'react';
import styles from './css/style.module.css'

export default function ItemList({id, name}) {
  return (
    <li className={styles.item} id={id}>{name}</li>
  )
}
