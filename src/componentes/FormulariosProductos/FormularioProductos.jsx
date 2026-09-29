function FormularioProducto ({datosForm, handleChangeInput, handleChangeOutput}) {
    return(
    <form onSubmit={handleChangeOutput}>
        <h3>Agregar nuevo producto</h3>
        <div>
            <label htmlFor="">Id</label>
            <input 
                type="text"
                name="id"
                value={datosForm.id}
                onChange={handleChangeInput}
                
            />
        </div>
        <div>
            <label htmlFor="">Nombre del Producto</label>
            <input
                type="text"
                name="nombre"
                placeholder="Teclado Mecánico"
                value={datosForm.nombre}
                onChange={handleChangeInput}
            />
        </div>
        <div>
            <label>Precio:</label>
        <input   type="number"
                 placeholder="Ej: 95"
                name="precio"
                value={datosForm.precio}
                onChange={handleChangeInput} />
        </div>
        <div>
            <label>Stock:</label>
        <input  type="number"
                placeholder="Ej: 5"
                name="stock"
                value={datosForm.stock}
                onChange={handleChangeInput} />
        </div>
        <div>
            <label>Imagen:</label>
        <input  type="file" 
                placeholder="avatar.jpg"
                name="imagen"
                value={datosForm.imagen}
                onChange={handleChangeInput}/>
        </div>
            <button type="submit">Guardar Producto</button>
    </form>
)}
export default FormularioProducto