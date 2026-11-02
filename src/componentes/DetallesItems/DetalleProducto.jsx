import styles from './DetallesItems.module.css';

function DetalleProducto({ producto }) {
    return (
        <div className={styles.card}>
            <img
                src={`${import.meta.env.BASE_URL}${producto.imagen}`}
                className={styles.imagen}
                alt={producto.nombre}
            />

            <div className={styles.cardTitle}>
                <h2>{producto.nombre}</h2>
            </div>

            <h3>{producto.detalles}</h3>

            <p>Precio: USD {producto.precio}</p>
        </div>
    );
}

export default DetalleProducto;