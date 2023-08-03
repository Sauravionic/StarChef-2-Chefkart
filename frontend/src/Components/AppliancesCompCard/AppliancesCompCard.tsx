import "./AppliancesCompCard.scss";
import refrigerator from "/refrigerator.png";
import refrigeratorBig from "/refrigerator@2x.png";
import { useState, useEffect } from 'react';

const AppliancesComp = ({ data }: any) => {
    if (!data) {
        return <div>Loading</div>
    }
    const appliances = data.ingredients.appliances;
    if (!appliances || appliances.length === 0) {
        return <div>No Appliances data available</div>;
    }
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const breakpoint = 500; 
    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
        };

    }, []);

    const getImageUrl = () => {
        if (windowWidth < breakpoint) {
        return refrigerator; 
        } else {
        return refrigeratorBig;
        }
    };
    return (
        <div className="appliancesCompCard">
            <div className="appliancesCompCardContainer">
                <div className="appliancesCompCardHeader">
                    <h3>Appliances</h3>
                </div>
                <div className="appliancesCompCardImages">
                    {appliances.map((a:any) => {
                        return (
                            <div className="image">
                                <img src={getImageUrl()} alt="" />
                                <span>{a.name}</span>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default AppliancesComp