import css from './HomeHero.module.css';

export default function HomeHero() {
  return (
    <div className={css.heroBox}>
      <div className={css.divBox}>
        <h1 className={css.heroTitle}>
          Take good <span className={css.heroSpan}>care</span> of your small
          pets
        </h1>
        <p className={css.heroText}>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </div>
    </div>
  );
}
