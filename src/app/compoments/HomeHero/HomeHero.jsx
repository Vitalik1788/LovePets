import Image from 'next/image';
import css from './HomeHero.module.css';
import mobileImage from '../../../../public/images/home-image-mobile.jpg';
import tabletImage from '../../../../public/images/hero-image-tablet.jpg';
import desktopImage from '../../../../public/images/hero-image-desktop.jpg';


export default function HomeHero() {
  return (
    <div>
      <div className={css.heroBox}>
        <div className={css.divBox}>
          <h1 className={css.heroTitle}>
            Take good <span className={css.heroSpan}>care</span> of your small
            pets
          </h1>
          <p className={css.heroText}>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
      </div>
      <div className={css.imageBox}>
        <Image className={css.imageMobile} src={mobileImage} alt="Girl with a Dog" priority={true} />
        <Image className={css.imageTablet} src={tabletImage} alt="Girl with a Dog" priority={true} />
        <Image className={css.imageDesktop} src={desktopImage} alt="Girl with a Dog" priority={true} />
      </div>
    </div>
  );
}
