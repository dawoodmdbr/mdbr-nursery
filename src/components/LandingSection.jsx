import "./LandingSection.css";
import React from "react";

function LandingSection() {
    return (
        <section id='landing'>
            <div className='landing'>
                <h1>MDBR Nursery</h1>
                <p>
                    Where nature meets elegance. MDBR curates a refined selection of botanical art—crafted to elevate your living spaces with timeless
                    greenery.
                </p>
                <a href="#products">
        <button className="get-started-btn">Explore Collection</button>
      </a>
            </div>
        </section>
    );
}

export default LandingSection;
