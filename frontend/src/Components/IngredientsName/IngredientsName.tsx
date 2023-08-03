import "./IngredientsName.scss";
import star from "/star.svg";
import clock from "/clock.svg";
import photo1 from "/Mask Group 17.png";
import photo1Big from "/Mask Group 17@2x.png";
import photo2 from "/photo2.png";
import photo2Big from "/photo2@2x.png";
import { useState, useEffect } from 'react';

const IngredientsName = ({ data }: any) => {
    if (!data) {
        return <div>Loading</div>
    }
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const breakpoint = 1000; 
    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
        };

    }, []);

    const getFirstImageUrl = () => {
        if (windowWidth < breakpoint) {
        return photo1; 
        } else {
        return photo1Big;
        }
    };

    const getSecondImageUrl = () => {
        if (windowWidth < breakpoint) {
        return photo2; 
        } else {
        return photo2Big;
        }
    };

    return (
        <div className="ingredientsName">
            <div className="ingredientsNameContainer">
                <div className="details">
                    <div className="heading">
                        <h1>{data.name}</h1>
                        <div className="star">
                            <span>4.2</span>
                            <img src={star} alt="" />
                        </div>
                    </div>
                    <div className="desc">
                        <p>Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire.</p>
                    </div>
                </div>
                <div className="time">
                    <div className="clockIcon">
                        <img src={clock} alt="" />
                    </div>
                    <div className="timehr">
                        <span>{data.timeToPrepare}</span>
                    </div>
                </div>
            </div>
            <div className="backgroundImage">
            </div>
            <div className="firstImage">
                <img src={getFirstImageUrl()} alt="" />
            </div>
            <div className="secondImage">
                <img src={getSecondImageUrl()} alt="" />
            </div>

            <hr/>
        </div>
    )
}

export default IngredientsName