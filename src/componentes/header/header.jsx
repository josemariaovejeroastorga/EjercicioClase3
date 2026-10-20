import styles from './header.module.css';
import {Link} from 'react-router-dom';
function Header() {
    return(
        <header className={styles.header}>
            <h1>SBO - SUMANDO BUENAS OBRAS</h1>
            <h2>Entorno de gestión inteligente para obras</h2>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><Link to="/" className={styles.navLink}>Inicio</Link></li>
                    <li><Link to="/componentes/Productos" className={styles.navLink}>Productos</Link></li>
                    <li><Link to="/componentes/Directorio" className={styles.navLink}>Contacto</Link></li>
                    <li><Link to="/componentes/FormularioContainer" className={styles.navLink}>Formulario</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;