import React from 'react';
import Logo from '../../../images/metroline-logo.svg';
import styles from './header-logo.module.scss';

export default function HeaderLogo() {
  return (
    <div className={styles.headerLogo}>
      <a className={styles.headerLogoLink} href="/">
        <img src={Logo} alt="Metroline Logo"/>
      </a>
    </div>
  )
}
