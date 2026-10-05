import styles from "./FormularioProductos.module.css"
function FormularioProducto ({datosForm, handleChangeInput, handleChangeOutput}) {
    return(
        
    <form onSubmit={handleChangeOutput}>
        <h3 className={styles.titulo}>Agregar un nuevo producto</h3>
        <div className={styles.formulario}>
                <div className={styles.campo}>
                            <label htmlFor="id">Id</label>
                            <input 
                                id="id"
                                type="text"
                                name="id"
                                placeholder="01"
                                value={datosForm.id}
                                onChange={handleChangeInput}
                            />
                </div>
                
                <div className={styles.campo}>
                            <label htmlFor="nombre">Nombre del Producto</label>
                            <input
                                id="nombre"
                                type="text"
                                name="nombre"
                                placeholder="Teclado Mecánico"
                                value={datosForm.nombre}
                                onChange={handleChangeInput}
                            />
                </div>
                <div className={styles.campo}>
                            <label htmlFor="precio">Precio</label>
                            <input
                                id="precio"
                                type="number"
                                placeholder="Ej: 95"
                                name="precio"
                                value={datosForm.precio}
                                onChange={handleChangeInput}
                             />
                </div>
                <div className={styles.campo}>
                            <label htmlFor="stock">Stock:</label>
                            <input  
                                id="stock"
                                type="number"
                                placeholder="Ej: 5"
                                name="stock"
                                value={datosForm.stock}
                                onChange={handleChangeInput}
                            />
                </div>
                <div className={styles.campo}>
                            <label htmlFor="imagen">Imagen:</label>
                            <input  
                                id="imagen"
                                type="file" 
                                placeholder="avatar.jpg"
                                name="imagen"
                                value={datosForm.imagen}
                                onChange={handleChangeInput}
                            />
                </div>
            
        </div>
        <div className={styles.divbutton}>
            <button type="submit">Guardar Producto</button>
        </div>
    </form>
)}
export default FormularioProducto