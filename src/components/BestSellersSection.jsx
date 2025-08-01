import {useMemo} from "react";
import {toast} from "react-hot-toast";
import {Link} from "react-router-dom";
import {useCart} from "../context/CartContext";
import "../styles/ProductsSection.css";

const BestSellersSection = ({products}) => {
    const {cartItems, addToCart} = useCart();

    const bestSellers = useMemo(() => {
        const allItems = products.flatMap((category) => category.items);
        const sorted = allItems.sort((a, b) => b.sold - a.sold);
        return sorted.slice(0, 6);
    }, [products]);

    return (
        <>
            <div className='products' style={{padding: "5rem 2rem"}}>
                <h1 className='section-title'>Best Sellers</h1>

                <div className='products-section'>
                    {bestSellers.map((plant) => (
                        <div className='product-card' key={plant.id}>
                            <div className='product-info'>
                                <img src={plant.image} alt={plant.name} />
                                <div className='product-text'>
                                    <h1>{plant.name}</h1>
                                    <h1 className='price'>Rs. {plant.price}</h1>
                                </div>
                            </div>
                            <button
                                className={`add-btn` + (cartItems.some((item) => item.id === plant.id) ? " added" : "")}
                                onClick={() => {
                                    addToCart(plant);
                                    toast.success(`${plant.name} added to cart!`);
                                }}
                                disabled={cartItems.some((item) => item.id === plant.id)}>
                                {cartItems.some((item) => item.id === plant.id) ? "Added" : "Add to Cart"}
                            </button>
                        </div>
                    ))}
                </div>

                <Link to={"/products"}>
                    <button className='get-started-btn' style={{marginTop: "2rem", backgroundColor: "#3b7f56"}}>
                        See More...
                    </button>
                </Link>
            </div>
        </>
    );
};

export default BestSellersSection;
