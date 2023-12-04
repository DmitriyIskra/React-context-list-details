import React from 'react';
import { useContext } from 'react';

import styles from './css/style.module.css';

import { DetailsContext } from '../../context/DetailsContext';

export default function Avatar() {
  const { avatar } = useContext(DetailsContext);

  return (
    <img className={styles.img} src={avatar} alt="..." />
  )
}
