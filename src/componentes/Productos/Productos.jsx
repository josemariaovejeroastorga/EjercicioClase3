import TarjetaDeProductos from '../TarjetaDeProductos/TarjetaDeProductos';
import styles from './Productos.module.css';
import React, { useState, useEffect } from 'react';
function Productos({Mensaje}) {
const [productos, setProductos] = useState([]);
const [error, setError] = useState(null);
const [cargando, setCargando] = useState(true);
useEffect(() => {
fetch('/data/productos.json')
.then((respuesta) => {
if (!respuesta.ok) {
throw new Error('No se pudo cargar la información de los productos');
}
return respuesta.json();
})
.then((datos) => {
setProductos(datos);
})
.catch((error) => {
setError(error.message);
})
.finally(() => {
setCargando(false);
});
}, []);
if (cargando) {
return <p>Cargando productos, por favor espere...</p>;
}
if (error) {
return <p>Error: {error}</p>;
}
  return (
  <div className={styles.contenedor}>

    <h1 className={styles.titulo}>
      {Mensaje}
    </h1>

    <div className={styles.grid}>
      {productos.map(p => (
        <TarjetaDeProductos
          key={p.id}
          producto={p}
        />
      ))}
    </div>

  </div>
);
}

export default Productos;