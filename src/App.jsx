import {useState} from "react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProductsSection from "./components/ProductsSection";
import CartSidebar from "./components/CartSidebar";

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
            <Header toggleCart={() => setIsCartOpen(true)} />
            <main>
                <LandingSection />
                <ProductsSection />
            </main>
            {isCartOpen && <div className='backdrop' onClick={() => setIsCartOpen(false)} />}
            {isCartOpen && <CartSidebar onClose={() => setIsCartOpen(false)} />}
            <CartSidebar onClose={() => setIsCartOpen(false)} isOpen={isCartOpen} />
        </>
    );
}

export default App;
