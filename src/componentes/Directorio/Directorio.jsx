import Credenciales from '../Credenciales/Credenciales';
import styles from './Directorio.module.css';
import React, { useState, useEffect } from 'react';
function Directorio({mensaje}) {
const [integrantes, setIntegrantes] = useState([]);
const [error, setError] = useState(null);
const [cargando, setCargando] = useState(true);
useEffect(() => {
fetch(`${import.meta.env.BASE_URL}data/integrantes.json`)
.then((respuesta) => {
if (!respuesta.ok) {
throw new Error('No se pudo cargar la información de los integrantes');
}
return respuesta.json();
})
.then((datos) => {
setIntegrantes(datos);
})
.catch((error) => {
setError(error.message);
})
.finally(() => {
setCargando(false);
});
}, []);
if (cargando) {
return <p>Cargando integrantes, por favor espere...</p>;
}
if (error) {
return <p>Error: {error}</p>;
}
  return (
    <div className={styles.contenedor}>
        <h1 className={styles.titulo}>
        {mensaje}
        </h1>
        <div className={styles.grid}>
          {integrantes.map(p => (
          <Credenciales key={p.id} integrantes={p} />
          ))}
        </div>
    </div>
  );
}

export default Directorio;