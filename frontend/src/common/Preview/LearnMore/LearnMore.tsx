import classNames from 'classnames';

import type { LearnMoreProps } from './LearnMore.interface';
import styles from './LearnMore.module.scss';

export const LearnMore = ({ className, ...props }: LearnMoreProps) => {
  return (
    <div
      {...props}
      className={classNames(styles.learnmore__container, className)}
    >
      <h2 className={styles.learnmore__header}>Доступно на всех платформах</h2>
      <a className={styles.learnmore__btn}>Узнать больше</a>
    </div>
  );
};
