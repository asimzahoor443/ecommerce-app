import React from 'react';
import css from './Footer.module.css';
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from '@heroicons/react/outline';
import Logo from '../../assets/logo.png';
const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
