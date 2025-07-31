import {Link} from "react-router-dom"
import "../styles/HeroSection.css";

const HeroSection = () => {
        
    return (
        <section id='hero' className='hero'>
            <div className='hero-image'>
                <img src='./images/hero-bg.jpg' alt='Hero' />
            </div>
            <div className='hero-text'>
                <h1>MDBR Nursery</h1>
                <p>
                    Where nature meets elegance. MDBR curates a refined selection of botanical art—crafted to elevate your living spaces with timeless
                    greenery.
                </p>
                    {/* <button className="get-started-btn">
                        <Link 
                        to={"/products"}                        
                        // onClick={() => {
                        //     const target = document.getElementById("products");
                        //     if (target) target.scrollIntoView({behavior: "smooth"});
                        // }}
                        >
                        Explore<br/>Collection
                    </Link>
                    </button> */}

                    <Link to={"/products"}>
                    <button className="get-started-btn">
                        Explore Collection
                    </button>
                    </Link>
            </div>
        </section>
    );
};

export default HeroSection;
