import Link from 'next/link';
import { useState } from 'react';
import Icon from '../Icon/Icon';
import styles from './Navbar.module.css';

const Navbar = () => {

    const [menuActive, setMenuActive] = useState(false);

    const handleNavigationBtn = () => {
        setMenuActive(!menuActive);

        // Add class to body
        document.body.classList.toggle('nav-open')
    }

    return (
      <header className={styles.header}>
          <div class="container navigation-wrapper">


            {/* NAVIGATION BTN */}
            <div class={styles.navigationBtn} onClick={handleNavigationBtn}>
                <div className={`${styles.hamburger} ${menuActive ? styles.triggered : ''}`}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            </div>

            <div className={`${styles.mainNavigation} ${menuActive ? styles.open : ''}`}>
                <nav>
                    {/* NAVIGATION */}
                    <ul className={`${styles.menu}`} aria-lebel="Main Menu" itemScope itemType="http://www.schema.org/SiteNavigationElement" >
                        <li className={styles.menuItem} itemProp="name">
                            <Link itemProp="url" href="/">Home</Link>
                        </li>
                        <li className={styles.menuItem} itemProp="name">
                            <Link itemProp="url" href="/about">About</Link>
                        </li>
                        <li className={styles.menuItem} itemProp="name">
                            <Link itemProp="url" href="/my-projects">My Projects</Link>
                        </li>
                        <li className={styles.menuItem} itemProp="name">
                            <Link itemProp="url" href="/contact">Contact me</Link>
                        </li>
                    </ul>
                </nav>
                <div class={styles.socialmedia}>
                    <a href="https://www.linkedin.com/in/gracjan-drozdek-4a5099230/" target="_blank" rel="noreferrer">
                        <Icon name="linkedin" />
                    </a>
                    <a href="https://github.com/grazjan" target="_blank" rel="noreferrer">
                        <Icon name="github" />
                    </a>
                    <a href="mailto:info@gdrozdek.de">
                        <Icon name="mail" />
                    </a>
                </div>
            </div>
          </div>
      </header>
  )
}

export default Navbar