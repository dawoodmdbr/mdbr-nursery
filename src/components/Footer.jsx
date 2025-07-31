import "../styles/Footer.css";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className='site-footer'>
            <div className='footer-grid'>
                <div className='footer-section'>
                    <h4>MDBR Nursery</h4>
                    <p>Your go-to nursery for quality plants, pots, and passion 🌱</p>
                </div>
                <div className='footer-section'>
                    <h4>Contact</h4>
                    <p>Email: support@mdbrnursery.com</p>
                    <p>Phone: +92 300 1234567</p>
                </div>
                <div className='footer-section'>
                    <h4>Quick Links</h4>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/products"}>Products</Link>
                        </li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <h4>Social</h4>
                    <p>
                        <a href='https://github.com/dawoodmdbr' target='_blank' rel='noopener noreferrer'>
                            GitHub
                        </a>
                        {" | "}
                        <a href='https://instagram.com/dawood.mdbr' target='_blank' rel='noopener noreferrer'>
                            Instagram
                        </a>
                    </p>
                </div>
            </div>
            <div className='footer-bottom'>
                &copy; {new Date().getFullYear()} MDBR Nursery. Built with 💚 by MDBR.
                <br />
                grown in JSX, watered with `npm install`, still broke but deploying :(
            </div>
        </footer>
    );
};

export default Footer;
