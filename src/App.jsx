import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";

import "./App.css";

import FrostedCursor from "./components/FrostedCursor";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

import CartSidebar from "./components/CartSidebar";

import {DotStream} from "ldrs/react";
import "ldrs/react/DotStream.css";

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
        }, 0);

        const cursor = document.getElementById("custom-cursor");

        const moveCursor = (e) => {
            cursor.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <>
            <Toaster position='top-right' toastOptions={{duration: 2000}} />
            {/* <div id='custom-cursor' className='frosted-cursor'></div> */}
            <FrostedCursor />

            {loading && (
                <div className='loader-wrapper'>
                    <DotStream size='150' speed='1.5' color='black' />
                </div>
            )}

            {!loading && (
                <Router basename='/mdbr-nursery/'>
                    <main>
                        <NavBar toggleCart={() => setIsCartOpen(true)} />
                        <Routes>
                            <Route path='/' element={<LandingPage products={products} />} />
                            <Route path='/products' element={<ProductsPage products={products} />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                        <Footer />
                    </main>

                    {isCartOpen && <div className='backdrop' onClick={() => setIsCartOpen(false)} />}
                    {isCartOpen && <CartSidebar onClose={() => setIsCartOpen(false)} />}
                    <CartSidebar onClose={() => setIsCartOpen(false)} isOpen={isCartOpen} />
                </Router>
            )}
        </>
    );
}

export default App;
