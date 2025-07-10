import {createContext, useContext, useState} from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (plant) => {
        setCartItems((prev) => {
            const exists = prev.find((item) => item.id === plant.id);
            if (exists) {
                return prev.map((item) => {
                    item.id === plant.id ? {...item, quantity: item.quantity + 1} : item;
                });
            } else {
                return [...prev, {...plant, quantity: 1}];
            }
        });
    };
};

const updateQuantity = (id, change) => {
    setCartItems((prev) =>
        prev.map((item) => (item.id === id ? {...item, quantity: item.quantity + change} : item)).filter((item) => item.quantity > 0)
    );
};

const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
};

const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
};
const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity,
0);
};

return <CartContext.Provider value={{cartItems, addToCart, updateQuantity, removeItem, getTotalItems, getTotalPrice}}>
    {children}
</CartContext.Provider>;
