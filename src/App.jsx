import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Header/>
      {/* <main>
        <LandingSection />
        <ProductsSection />
      </main>
      {isCartOpen && <CartSidebar onClose={() => setIsCartOpen(false)} />} */}
    </>
  );
}

export default App;
