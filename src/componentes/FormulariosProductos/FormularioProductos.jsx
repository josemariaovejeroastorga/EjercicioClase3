function FormularioProducto ({datosForm, handleChangeInput, handleChangeOutput}) {
    return(
    <form onSubmit={handleChangeOutput}>
        <h3>Agregar nuevo producto</h3>
        <div>
            <label htmlFor="id">Id</label>
            <input 
                id="id"
                type="text"
                name="id"
                value={datosForm.id}
                onChange={handleChangeInput}
                
            />
        </div>
        <div>
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
        <div>
            <label htmlFor="precio">Precio</label>
            <input
                id="precio"
                type="number"
                placeholder="Ej: 95"
                name="precio"
                value={datosForm.precio}
                onChange={handleChangeInput} />
        </div>
        <div>
            <label htmlFor="stock">Stock:</label>
        <input  
                id="stock"
                type="number"
                placeholder="Ej: 5"
                name="stock"
                value={datosForm.stock}
                onChange={handleChangeInput} />
        </div>
        <div>
            <label htmlFor="imagen">Imagen:</label>
        <input  
                id="imagen"
                type="file" 
                placeholder="avatar.jpg"
                name="imagen"
                value={datosForm.imagen}
                onChange={handleChangeInput}/>
        </div>
            <button type="submit">Guardar Producto</button>
    </form>
)}
export default FormularioProducto