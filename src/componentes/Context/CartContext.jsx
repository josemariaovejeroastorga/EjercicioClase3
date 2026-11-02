import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
//contexto
export const CartContext = createContext()
//consumer

export const useCart = () => { //custom hook
    const context = useContext(CartContext);
    if (!context) {
        throw new Error(
            'useCart debe usarse dentro de un Provider'
        );
    }
    return context;
}
//
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const addToCart = (product, quantity) => {
        const itemInCart = cart.find(item => item.id === product.id);
        if (itemInCart) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
            setCart(updatedCart);
            } 
        else {
            setCart(prevCart => [...prevCart, { ...product, quantity }]);
            }
        return
    };
    const clearCart = () => {
        setCart([]);
    };
    const getCartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };
    const getCartTotal = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.quantity,
            0);
    };
    return (
        <CartContext.Provider
            value={
                {
                    cart,
                    addToCart,
                    clearCart,
                    getCartQuantity,
                    getCartTotal,
                }
            }>
            {children}
        </CartContext.Provider>
    );
};