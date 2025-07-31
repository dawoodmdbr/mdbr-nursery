import "../styles/ProductsSection.css";
import {useCart} from "../context/CartContext";
import toast from "react-hot-toast";

const ProductsSection = ({products}) => {
    const {cartItems, addToCart} = useCart();

    return (
        <>
            <section id='products' className='products'>
                <div className='category-blocks'>
                    {products.map((categoryBlock) => (
                        <div className='category-block' id={categoryBlock.category} key={categoryBlock.category}>
                            <h2 className='category-title'>{categoryBlock.category}</h2>
                            <div className='products-section'>
                                {categoryBlock.items.map((plant) => (
                                    <div className='product-card' key={plant.id}>
                                        <div className='product-info'>
                                            <img src={plant.image} alt={plant.name} />
                                            <div className='product-text'>
                                                <h1>{plant.name}</h1>
                                                <p className='desc'>{plant.description}</p>
                                                <h1 className='price'>Rs. {plant.price}</h1>
                                            </div>
                                        </div>
                                        <button
                                            className={
                                                `add-btn` + (cartItems.some((item) => item.id === plant.id) ? " added" : "")
                                            }
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
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};
export default ProductsSection;
