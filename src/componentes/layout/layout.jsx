import Footer from '../footer/footer'
import Header from '../header/header'
import Cuerpo from '../Cuerpo/Cuerpo'
import {Outlet} from 'react-router-dom'

function Layout() {
    return(
        <div>
            <Header/>
            <Cuerpo/>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}
export default Layout;