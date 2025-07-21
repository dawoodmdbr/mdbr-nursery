import {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProductsSection from "./components/ProductsSection";
import CartSidebar from "./components/CartSidebar";
import {Quantum} from "ldrs/react";
import "ldrs/react/Quantum.css";

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch("/mdbr-nursery/Products.json")
                .then((res) => res.json())
                .then((data) => {
                    setProducts(data.Products);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Error fetching products:", err);
                    setLoading(false);
                });
        }, 1000);

        const cursor = document.getElementById("custom-cursor");

        const moveCursor = (e) => {
            cursor.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <>
            <div id='custom-cursor' className='frosted-cursor'></div>

            {loading && (
                <div className='loader-wrapper'>
                    <Quantum size='95' speed='1.75' color='white' />
                </div>
            )}

            {!loading && (
                <>
                    <Header toggleCart={() => setIsCartOpen(true)} />
                    <main>
                        <LandingSection onImageLoad={() => setLoading(false)} />
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
