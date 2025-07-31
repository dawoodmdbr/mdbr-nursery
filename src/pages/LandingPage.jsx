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
        }, 500);
    }, []);
    return (
        <>
            {loading && (
                <div className='loader-wrapper'>
                    <DotStream size='60' speed='2.5' color='black' />
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
