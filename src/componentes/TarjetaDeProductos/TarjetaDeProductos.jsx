import styles from './TarjetaDeProductos.module.css'
import Favorito from '../Favorito/Favorito';
import DetalleItem from '../DetallesItems/DetallesItems';
import DetalleProducto from '../DetallesItems/DetalleProducto';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

function TarjetaDeProductos({ producto }) {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart(producto, 1);
    alert(`Agregaste una unidad de${producto.nombre} al carrito!!`);
  };
return (
  <div className={styles.card}>
    <Favorito />
    <img
      src={`${import.meta.env.BASE_URL}${producto.imagen}`}
      alt={producto.nombre}
      className={styles.image}
    />
    <h3 className={styles.name}>{producto.nombre}</h3>
    <h3 className={styles.name}>stock: {producto.stock}</h3>
    <p className={styles.price}>precio: usd {producto.precio}</p>
    <button
      className={styles.button}
      onClick={handleAddToCart}
    >
      Agregar al carrito
    </button>
    <Link
      to={`/componentes/DetallesItems/${producto.id}`}
      className={styles.button}
    >
      Mas Info
    </Link>
  </div>
);
};
export default TarjetaDeProductos;