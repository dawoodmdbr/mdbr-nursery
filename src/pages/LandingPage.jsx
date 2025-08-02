import {useEffect, useState} from "react";
import HeroSection from "../components/HeroSection";
import BestSellersSection from "../components/BestSellersSection";
import {DotStream} from "ldrs/react";
import "ldrs/react/DotStream.css";

const LandingPage = ({products}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 0);
    }, []);
    return (
        <>
            {loading && (
                <div className='loader-wrapper'>
                    <DotStream size='150' speed='1.5' color='black' />
                </div>
            )}
            {!loading && (
                <>
                    <HeroSection />
                    <BestSellersSection products={products} />
                </>
            )}
        </>
    );
};

export default LandingPage;
