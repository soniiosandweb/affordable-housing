import { useLocation } from "react-router-dom";
import MetaData from '../Layout/MetaData.jsx'
import PrimeLocation from "../Home/PrimeLocation/PrimeLocation.jsx";

const LocationPage = () => {

    const location = useLocation();
    
    return(
        <>

            <MetaData 
                title={"Apartments in Zirakpur - Appreciant Realty"}
                description={"Apartments in Zirakpur Modern Living in a Prime Location"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
            <div className="">
                <PrimeLocation />
            </div>
            
        </>
       
    )
}

export default LocationPage