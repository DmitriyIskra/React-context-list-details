import React from 'react';

import styles from './css/style.module.css';

export default function Item({title, value}) {
  return (
    <li className={styles.item}>{title}: {value}</li>
  )
}
