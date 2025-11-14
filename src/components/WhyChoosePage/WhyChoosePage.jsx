import { useLocation } from "react-router-dom";
import MetaData from '../Layout/MetaData.jsx'
import WhyChoose from "../Home/WhyChoose/WhyChoose.jsx";

const WhyChoosePage = () => {

    const location = useLocation();
    
    return(
        <>

            <MetaData 
                title={"Why Choose Us - Appreciant Realty"}
                description={"Why Choose Us"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
            <div className="">
                <WhyChoose />
            </div>
            
        </>
       
    )
}

export default WhyChoosePage