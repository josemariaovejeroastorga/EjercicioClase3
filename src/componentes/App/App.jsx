import './App.css';
import Layout from '../layout/layout';
import Productos from '../Productos/Productos'
import FormularioContainer from '../FormularioContainer/FormularioContainer';
function App () {
    return (
        <Layout>
            <Productos Mensaje={'SELECCIONA UNO DE NUESTROS DESARROLLOS SEGUN TUS NECESIDADES'} />
            <FormularioContainer/>
        </Layout>
    )
}
export default App;
