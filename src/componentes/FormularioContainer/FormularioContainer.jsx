import { useState } from "react"
import FormularioProducto from "../FormulariosProductos/FormularioProductos";


function FormularioContainer() {
    const [datosForm, setDatosForm] = useState({
        id: "",
        nombre: "",
        precio: "",
        stock: "",
    });
    const [imageFile, setImageFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const handleChangeInput = (evento) => {
        const { name, value } = evento.target;
        setDatosForm({
            ...datosForm, [name]: value
        });
    }
    const handleChangeImage = (evento) => {
        setImageFile(evento.target.files[0]);
    };
    const handleChangeOutput = async (evento) => {
    evento.preventDefault();
    if (!imageFile) {
        alert("Por favor, selecciona una imagen para el producto.");
        return;
    }
    setLoading(true);

    const apiKey = '6ffdd4bc3d0d4bd515278ba6ab60cff6';
    const formData = new FormData();
    formData.append('image', imageFile);
    try {
        console.log("Subiendo imagen a Imgbb...");
        const respuestaImgbb = await
        fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
            method: 'POST',
            body: formData,
        });
        const datosImgbb = await respuestaImgbb.json();
        if (!respuestaImgbb.ok || !datosImgbb.success) {
            throw new Error("La subida de la imagen a ImgBB falló")};
            console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);
        const productoCompleto = {
                ...datosForm,
                urlImagen: datosImgbb.data.url
            };
        
        console.log('Enviando los siguientes datos COMPLETOS a la API:',
                productoCompleto);
    } catch (error) {
        console.error("Error en el proceso de envío:", error);
        alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
    }
    finally {setLoading(false)};
};

return (
    <FormularioProducto
        datosForm={datosForm}
        handleChangeInput={handleChangeInput}
        handleChangeOutput={handleChangeOutput}
        handleChangeImage={handleChangeImage}
        loading={loading}
    />
);
}   
export default FormularioContainer