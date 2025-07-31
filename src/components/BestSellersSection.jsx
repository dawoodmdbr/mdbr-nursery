import {useMemo} from "react";
import {useCart} from "../context/CartContext";
import "../styles/ProductsSection.css";

const BestSellersSection = ({products}) => {
    const {cartItems, addToCart} = useCart();

    const bestSellers = useMemo(() => {
        const allItems = products.flatMap((category) => category.items);
        const sorted = allItems.sort((a, b) => b.sold - a.sold);
        return sorted.slice(0, 6);
    }, []);

    return (
        <div className='products'>
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
                        <div
                            className='add-btn'
                            onClick={() => addToCart(plant)}
                            disabled={cartItems.some((item) => item.id === plant.id)}>
                            {cartItems.some((item) => item.id === plant.id) ? "Added" : "Add to Cart"}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSellersSection;
