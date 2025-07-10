import "./ProductsSection.css";
import products from "../data/Products";

const ProductsSection = () => {
    return (
        <>
            <section id='products' className='products'>
                <h1>Products</h1>
                <div className='category-blocks'>
                    {products.map((categoryBlock) => (
                        <div className='category-block' key={categoryBlock.category}>
                            <h2 className='category-title'>{categoryBlock.category}</h2>
                            <div className='products-section'>
                                {categoryBlock.items.map((plant) => (
                                    <div className='product-card' key={plant.id}>
                                        <div className='product-info'>
                                            <img src={plant.image} alt={plant.name} />
                                            <div className='product-text'>
                                                <h3>{plant.name}</h3>
                                                <p className='desc'>{plant.description}</p>
                                                <p className='price'>Rs. {plant.price}</p>
                                            </div>
                                        </div>
                                        <button
                                            className='add-btn'
                                            onClick={() => addToCart(plant)}
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
