import Directorio from '../Directorio/Directorio';
import styles from './footer.module.css'
function Footer () {
    return (
        <footer className={styles.footer}>
            <Directorio mensaje={'NUESTRO DIRECTORIO'} />
            <p>@2026 SBO - Entorno de gestión inteligente para obras</p>
        </footer>
        )
}
export default Footer;