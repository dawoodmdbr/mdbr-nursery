import { useState, useEffect } from "react";
import ProductsSection from "./../components/ProductsSection";
import {DotStream} from "ldrs/react";
import "ldrs/react/DotStream.css";

const ProductsPage = () => {
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
        }, 500);
    }, []);
    return (
        <>
            {loading && (
                <div className='loader-wrapper'>
                    <DotStream size='60' speed='2.5' color='black' />
                </div>
            )}
            {!loading && <ProductsSection products={products} />}
        </>
    );
};

export default ProductsPage;
