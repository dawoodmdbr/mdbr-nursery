import "../styles/Header.css";
import {Link} from "react-router-dom";
import {useCart} from "../context/CartContext";
import Logo from "/logo.png"

const Header = ({toggleCart}) => {
    const {getTotalItems} = useCart();

    return (
        <>
            <nav className='pc nav'>
                <div className='nav-left'>
                    <Link
                        to={"/"}
                        className='logo'
                        // onClick={() => {
                        //     const target = document.getElementById("landing");
                        //     if (target) target.scrollIntoView({behavior: "smooth"});
                        // }}
                    >
                        <img src={Logo} alt='MDBR' />
                        <h1>MDBR<br/>NURSERY</h1>
                    </Link>
                </div>

                <div className='nav-center'>
                    <Link to={"/products"} className='prod-btn'>
                        PRODUCTS
                    </Link>
                </div>

                <div className='nav-right'>
                    <div className='cart' onClick={toggleCart}>
                        <div className='cart-img'>🛒</div>
                        <span className='cart-count'>{getTotalItems()}</span>
                    </div>
                </div>
            </nav>

            <nav className='mobile nav'>
                    <Link to={"/"} className='logo'>
                        <img src={Logo} alt='MDBR' />
                    </Link>

                
                    <div className='cart' onClick={toggleCart}>
                        <div className='cart-img'>🛒</div>
                        <span className='cart-count'>{getTotalItems()}</span>
                    </div>
            </nav>
        </>
    );
};

export default Header;
