import {Link} from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
    return (
        <>
            <div className='notfound-container'>
                <h1 className='notfound-code'>404</h1>
                <p className='notfound-message'>Page not found. The plants must’ve eaten it 🌱</p>
                <Link to='/' className='notfound-link'>
                    Go back home
                </Link>
            </div>
        </>
    );
};

export default NotFound;
