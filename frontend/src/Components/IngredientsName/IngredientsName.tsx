import "./IngredientsName.scss";
import star from "/star.svg";
import clock from "/clock.svg";
import photo1 from "/Mask Group 17.png";
import photo2 from "/photo2.png";

const IngredientsName = ({ data }: any) => {
    if (!data) {
        return <div>Loading</div>
    }
    
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
                <img src={photo1} alt="" />
            </div>
            <div className="secondImage">
                <img src={photo2} alt="" />
            </div>

            <hr/>
        </div>
    )
}

export default IngredientsName