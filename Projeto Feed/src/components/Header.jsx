import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg';
//import horseLogo from '../assets/horseLogo.png'
export function Header() {
    return (
        <header className={styles.header}>
            {/* <img src={igniteLogo} alt="Logotipo Ignite" /> */}
            <img src={igniteLogo} alt="Logotipo Ignite" />
            <h1>Ignite Feed</h1>
        </header>
    
        
    );
}