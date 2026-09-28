import styles from './TarjetaDeProductos.module.css'
import Favorito from '../Favorito/Favorito';

function TarjetaDeProductos({ producto }) {
  const CarritoClick = () => {
    alert(`Agregaste ${producto.nombre} al carrito!!`)
  }
  return (
    <div className={styles.card}>
      <Favorito/>
        <img
        src={producto.imagen}
        alt={producto.nombre}
        className={styles.image}
        />
      <h3 className={styles.name}>{producto.nombre}</h3>
      <p className={styles.price}>usd {producto.precio}</p>
      <button className={styles.button} onClick={CarritoClick}>Agregar al carrito</button>
    </div>
  );
}

export default TarjetaDeProductos;