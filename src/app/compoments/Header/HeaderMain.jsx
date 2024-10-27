import css from './HeaderMain.module.css';
import Image from 'next/image';
import logo from '../../../../public/images/logo-mobile-orange.jpg';

export default function HeaderMain() {
  return (
    <div className={css.headerBox}> 
      <Image className={css.logoIMG} src={logo} alt='logo' priority={true} />
    </div>
  )
}