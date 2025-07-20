import "./LandingSection.css";

const LandingSection = ({ onImageLoad }) => {
    return (
        <section id='landing' className='landing'>
            <div className='landing-text'>
                <h1>MDBR Nursery</h1>
                <p>
                    Where nature meets elegance. MDBR curates a refined selection of botanical art—crafted to elevate your living spaces with timeless
                    greenery.
                </p>
                <a>
                    <button
                        className='get-started-btn'
                        onClick={() => {
                            const target = document.getElementById("products");
                            if (target) target.scrollIntoView({behavior: "smooth"});
                        }}>
                        Explore Collection
                    </button>
                </a>
            </div>
        </section>
    );
}

export default LandingSection;
