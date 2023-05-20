import Spline from '@splinetool/react-spline';
import styles from './index.module.css'
import React from 'react';

export const SplineKeyboard = () => {
  return (
    <div className={styles.splineBanner}>
        <Spline 
            className={styles.spline}
            scene="https://prod.spline.design/VpaaXaLCYGubceWM/scene.splinecode" />
    </div>
  );
}