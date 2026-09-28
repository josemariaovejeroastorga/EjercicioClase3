import Footer from '../footer/footer'
import Header from '../header/header'
import Cuerpo from '../Cuerpo/Cuerpo'
function Layout({children}) {
    return(
        <div>
            <Header/>
            <Cuerpo/>
            {children}
            <Footer/>
        </div>
    )
}
export default Layout;