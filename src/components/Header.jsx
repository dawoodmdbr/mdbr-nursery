import "./Header.css";
import {useCart} from "../context/CartContext";

const Header = ({toggleCart}) => {
    const {getTotalItems} = useCart();

    return (
        <nav className='nav'>
            <div className="nav-left">
                <a
                className='logo'
                onClick={() => {
                    const target = document.getElementById("landing");
                    if (target) target.scrollIntoView({behavior: "smooth"});
                }}>
                MDBR NURSERY
            </a>
            </div>

            <div className="nav-center">
                <a
                className='prod-btn'
                onClick={() => {
                    const target = document.getElementById("products");
                    if (target) target.scrollIntoView({behavior: "smooth"});
                }}>
                PRODUCTS
            </a>
            </div>

            <div className='nav-right'>
                <div className='cart' onClick={toggleCart}>
                    <div className='cart-img'>🛒</div>
                    <span className='cart-count'>{getTotalItems()}</span>
                </div>
            </div>
        </nav>
    );
};

export default Header;
