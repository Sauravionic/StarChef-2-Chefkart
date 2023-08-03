import "./VegetableCompCard.scss";
import down from "/down.svg";
// import { useEffect, useState } from "react";
const VegetableCompCard = ({ data }: any) => {

    if (!data) {
        return <div>Loading</div>
    }
    const veg = data.ingredients.vegetables;
    if (!veg || veg.length === 0) {
        return <div>No vegetables data available</div>;
    }
    console.log('Vegetables in VegetableCompCard:', veg);
    return (
        <div className="vegetableCompCard">
            <div className="vegetableCompContainer">
                <div className="vegetableCompheader">
                    <h3>{`Vegetables (${veg.length})`}</h3>
                    <div className="image">
                        <img src={down} alt="" />
                    </div>
                </div>
                <div className="vegetableCompContent">
                    {veg.map((v: any) => {
                        return (
                            <div className="veggie">
                                <span className="veggiename">{v.name}</span>
                                <span className="veggiequantity">{`${v.quantity}`}</span>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default VegetableCompCard