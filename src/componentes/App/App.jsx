import './App.css';
import Layout from '../layout/layout';
import Productos from '../Productos/Productos'
import FormularioContainer from '../FormularioContainer/FormularioContainer';
import { Routes, Route } from 'react-router-dom';
import Directorio from '../Directorio/Directorio';
import DetalleItem from '../DetallesItems/DetallesItems';
import Cart from '../Cart/Cart';
function App () {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<h1>Página de incio</h1>}/>
                <Route path="/componentes/Productos" element={<Productos 
                                                    Mensaje={'SELECCIONA UNO DE NUESTROS DESARROLLOS SEGUN TUS NECESIDADES'}/>}/>
                <Route path="/componentes/Directorio" element={<Directorio
                                                    Mensaje={'NUESTRO DIRECTORIO'}/>}/>
                <Route path="/componentes/FormularioContainer" element={<FormularioContainer
                                                Mensaje={'AGREGAR NUEVO PRODUCTO'}/>}/>
                <Route path="/componentes/DetallesItems/:id" element={<DetalleItem />}/>
                <Route path="/componentes/Cart" element={<Cart />}/>
            </Route>
        </Routes>);
}
export default App;
