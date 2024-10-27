import Image from "next/image";
import styles from "./page.module.css";
import HomeHero from "./compoments/HomeHero/HomeHero";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeHero />
    </div>
  );
}
