import { useRef, useEffect } from "react";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      document.documentElement.style.setProperty(
        "--scroll-padding",
        headerRef.current.offsetHeight +
          parseFloat(
            window
              .getComputedStyle(headerRef.current)
              .getPropertyValue("margin-top")
          ) +
          "px"
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [headerRef]);

  return (
    <header ref={headerRef} className="bd">
      <a
        href="/#homepage"
        className={styles[("left-logo", "nav-side-element")]}
      >
        <img src="/svg/logo-full.svg" />
      </a>
      <div className={styles["buttons"]}>
        <a href="/#details">Hakkında</a>
        <a href="/#timeline">Zaman Çizelgesi</a>
        <a href="/#format">Detaylar</a>
        <a href="/#faq">SSS</a>
      </div>
      <div
        className={`${styles["right-button"]} ${styles["nav-side-element"]}`}
      >
        <a
          href="https://algoleague.com/contest/algocomp25-qualification-round/description"
          target="_blank"
        >
          <button className="rounded-acm-button">Kayıt</button>
        </a>
      </div>
    </header>
  );
}
