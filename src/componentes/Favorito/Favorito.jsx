import {useState} from 'react'
import styles from './Favorito.module.css'
function Favorito(){
    const [fav,setFav]=useState(false)
    const FavClick = () => {
        setFav( fav => !fav)
    }
    return(
    <button className={styles.FavoriteButton}
    onClick={FavClick}>
        {fav ? '★' : '☆'}

    </button>
    )
}
export default Favorito