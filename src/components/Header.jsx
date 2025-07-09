import "./Header.css"
const Header = () => {

    return (
        <>
            <nav className="nav">
                <a href="#header" className="logo"><span>MDBR</span><br/>NURSERY</a>
                <a href="#products" className="prod-btn">PRODUCTS</a>
                <div className="cart">
                    <div className="cart-img">🛒</div>
                    <span className="cart-count">0</span>
                </div>
            </nav>
        </>
    )
}

export default Header