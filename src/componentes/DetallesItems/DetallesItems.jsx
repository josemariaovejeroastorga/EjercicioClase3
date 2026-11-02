import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DetalleProducto from './DetalleProducto';

function DetalleItem() {

    const { id } = useParams();

    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}data/productos.json`)
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error(
                        'No se pudo cargar la información de los productos'
                    );
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
        return <p>Cargando producto...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const productoId = productos.find(
        (producto) => String(producto.id) === String(id)
    );

    if (!productoId) {
        return <p>No se encontró el producto solicitado</p>;
    }

    return (
        <>
            <DetalleProducto producto={productoId} />

            <Link to="/componentes/Productos">Volver a Productos</Link>
        </>
    );
}

export default DetalleItem;