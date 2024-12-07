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

        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 North Avenue Orlando, FL 32001</span>
            </span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <span>352-306-4415</span>
            </span>
            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="@mailto:asimzahoorawan@gmail.com">
                support@fashanbazar.com
              </a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <a href="/about">Sign In</a>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <a href="/about">About Us</a>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Rsources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <a href="/about">Safety Privacy & Terms</a>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyRight}>
        <span>Copyright @2024 by FashionBazar</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
