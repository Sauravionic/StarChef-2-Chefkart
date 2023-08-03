import VegetableCompCard from "../VegetableCompCard/VegetableCompCard.tsx";
import SpicesCompCard from "../SpicesCompCard/SpicesCompCard.tsx";
import "./IngredientsComp.scss";
import AppliancesCompCard from "../AppliancesCompCard/AppliancesCompCard.tsx";

const IngredientsComp = ({data}: any) => {
    return (
        <div className="ingredientsComp">
            <div className="ingredientsCompContainer">
                <div className="headers">
                    <h2>Ingredients</h2>
                    <span>For 2 People</span>
                </div>
                <hr />
                <div className="vegetableComp">
                    <VegetableCompCard data={data} />
                </div>
                <hr />
                <div className="spicesComp">
                    <SpicesCompCard data={data} />
                </div>
                <hr />
                <div className="appliancesComp">
                    <AppliancesCompCard data={data} />
                </div>
            </div>
        </div>
    )
}

export default IngredientsComp