import styles from './Credenciales.module.css'
import Favorito from '../Favorito/Favorito';
function Credenciales({ integrantes }) {
  const MensajeClick = () => {
    alert(`Vas a enviar un mensaje a ${integrantes.nombre}!!`)
  }
  return (
    <div className={styles.credenciales}>
      <Favorito/>
        <img
        src={`${import.meta.env.BASE_URL}${integrantes.imagen}`}
        alt={integrantes.nombre}
        className={styles.image}
        />
      <p className={styles.name}>{integrantes.nombre}</p>
      <p className={styles.name}>{integrantes.profesión}</p>
      <p className={styles.name}>{integrantes.puesto}</p>
      <button className={styles.button} onClick={MensajeClick}>Enviar un mensaje</button>
    </div>
  );
}

export default Credenciales;