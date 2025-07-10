import "./Header.css";
import { useState, useEffect } from "react";

const Header = () => {
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
                <a href='#products' className='prod-btn'>
                    PRODUCTS
                </a>
                <a className='cart' href='#cart'>
                    <div className='cart-img'>🛒</div>
                    <span className='cart-count'>0</span>
                </a>
            </nav>
        </>
    );
};

export default Header;
