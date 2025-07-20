import {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProductsSection from "./components/ProductsSection";
import CartSidebar from "./components/CartSidebar";
import {LineWobble} from "ldrs/react";
import "ldrs/react/LineWobble.css";

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/Products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
                setLoading(false);
            });
        }, 1000);
    }, []);

    return (
        <>
            {loading && (
                <div className='loader-wrapper'>
                    <LineWobble size='150' stroke='5' bgOpacity='0.1' speed='1' color='white' />
                </div>
            )}

            {!loading && (
                <>
                    <Header toggleCart={() => setIsCartOpen(true)} />
                    <main>
                        <LandingSection />
                        <ProductsSection products={products} />
                    </main>
                    {isCartOpen && <div className='backdrop' onClick={() => setIsCartOpen(false)} />}
                    {isCartOpen && <CartSidebar onClose={() => setIsCartOpen(false)} />}
                    <CartSidebar onClose={() => setIsCartOpen(false)} isOpen={isCartOpen} />
                </>
            )}
        </>
    );
}

export default App;
