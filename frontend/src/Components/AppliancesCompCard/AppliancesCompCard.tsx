import "./AppliancesCompCard.scss";
import refrigerator from "/refrigerator.png";

const AppliancesComp = ({ data }: any) => {
    if (!data) {
        return <div>Loading</div>
    }
    const appliances = data.ingredients.appliances;
    if (!appliances || appliances.length === 0) {
        return <div>No Appliances data available</div>;
    }

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
                                <img src={refrigerator} alt="" />
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