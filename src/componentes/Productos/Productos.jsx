import { collection, getDocFromCache, getDocs } from 'firebase/firestore';
import TarjetaDeProductos from '../TarjetaDeProductos/TarjetaDeProductos';
import styles from './Productos.module.css';
import React, { useState, useEffect } from 'react';
import { db } from '/Firestore/config';
function Productos({ Mensaje }) {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    const productosDB = collection(db, "productos");
    getDocs(productosDB).then((resp)=> {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        })
      )
    })
.catch ((error) => {
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