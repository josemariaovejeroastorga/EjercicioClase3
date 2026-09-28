import './App.css';
import Layout from '../layout/layout';
import Productos from '../Productos/Productos'
function App () {
    return (
        <Layout>
            <Productos Mensaje={'SELECCIONA UNO DE NUESTROS DESARROLLOS SEGUN TUS NECESIDADES'} />
        </Layout>
    )
}
export default App;
