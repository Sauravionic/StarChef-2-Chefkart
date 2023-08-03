import "./SpicesCompCard.scss";
import down from "/down.svg";

const SpicesComp = ({ data }: any) => {
    if (!data) {
        return <div>Loading</div>
    }
    const spices = data.ingredients.spices;
    if (!spices || spices.length === 0) {
        return <div>No Spices data available</div>;
    }

    return (
        <div className="spicesCompCard">
            <div className="spicesCompCardContainer">
                <div className="spicesCompheader">
                    <h3>{`Spices (${spices.length})`}</h3>
                    <div className="image">
                        <img src={down} alt="" />
                    </div>
                </div>
                <div className="spicesComppContent">
                    {spices.map((s: any) => {
                        return(
                            <div className="spices">
                                <span className="spicesname">{s.name}</span>
                                <span className="spicesquantity">{`${s.quantity}`}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SpicesComp