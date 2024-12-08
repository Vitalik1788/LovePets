'use client';

import css from './HeaderMain.module.css';
import Image from 'next/image';
import logo from '../../../../public/images/logo-mobile-orange.jpg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaUser } from 'react-icons/fa6';
import { useState } from 'react';

export default function HeaderMain() {
  const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <div className={css.headerBox}>
      <Image className={css.logoIMG} src={logo} alt="logo" priority={true} />
      <div className={css.menuBox}>
        {isLoggedin && (
          <>
            <div className={css.userIconBox}>
              <FaUser className={css.userIcon} />
            </div>
            <p className={css.userName}>Anna</p>
          </>
        )}

        <RxHamburgerMenu className={css.burgerMenuIcon} />
      </div>
    </div>
  );
}
