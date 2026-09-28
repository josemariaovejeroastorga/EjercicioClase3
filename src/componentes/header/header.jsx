import styles from './header.module.css'
function Header() {
    return(
        <header className={styles.header}>
            <h1>SBO - SUMANDO BUENAS OBRAS</h1>
            <h2>Entorno de gestión inteligente para obras</h2>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><a href="#" className={styles.navLink}>Inicio</a></li>
                    <li><a href="#" className={styles.navLink}>Productos</a></li>
                    <li><a href="#" className={styles.navLink}>Contacto</a></li>
                    <li><a href="#" className={styles.navLink}>Carrito</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;