import React from 'react';
import styles from './button.module.scss'

export type ButtonProps = {
  variation?: 'primary' | 'secondary'
  text: string
};

export function Button({ text, variation }: ButtonProps) {
  return (
    <button className={styles.button} data-variation={variation}>
      {text}
    </button>
  );
}
