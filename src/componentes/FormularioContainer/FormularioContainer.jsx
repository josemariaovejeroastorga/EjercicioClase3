import { useState } from "react";
import FormularioProducto from "../FormulariosProductos/FormularioProductos";
function FormularioContainer () {
     const [datosForm, setDatosForm] = useState( {
            id:"",
            nombre:"",
            precio:"",
            stock:"",
            imagen:"",
        });
        const handleChangeInput = (evento) => {
        const { name, value } = evento.target;
                setDatosForm({
        ...datosForm, [name]: value
            });
            }; 
        const handleChangeOutput = (evento) => {
            evento.preventDefault();
            console.log('Enviando los siguientes datos a la API, datosForm')};
        return (
            <FormularioProducto
            datosForm={datosForm}
            handleChangeInput={handleChangeInput}
            handleChangeOutput={handleChangeOutput}
           />
        );
};
export default FormularioContainer