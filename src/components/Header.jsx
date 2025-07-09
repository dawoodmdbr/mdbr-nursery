import "./Header.css"
const Header = () => {

    return (
        <>
            <nav className="nav">
                <a href="#landing" className="logo"><span>MDBR</span><br/>NURSERY</a>
                <a href="#products" className="prod-btn">PRODUCTS</a>
                <a className="cart" href="#cart">
                    <div className="cart-img">🛒</div>
                    <span className="cart-count">0</span>
                </a>
            </nav>
        </>
    )
}

export default Header