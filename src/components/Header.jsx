import "./Header.css";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

const Header = ({toggleCart}) => {
    const { getTotalItems } = useCart();

    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowHeader(false); // scrolling down → hide
            } else {
                setShowHeader(true); // scrolling up → show
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <nav className={`nav ${showHeader ? "show" : "hide"}`}>
                <a href='#landing' className='logo'>
                    <span>MDBR</span>
                    <br />
                    NURSERY
                </a>
                <a className='prod-btn'>
                    PRODUCTS
                </a>
                <div className='cart' onClick={toggleCart}>
                    <div className='cart-img'>🛒</div>
                    <span className='cart-count'>{getTotalItems()}</span>
                </div>
            </nav>
        </>
    );
};

export default Header;
