import "./DishesBottomOption.scss";
import burger from "/burger.png";
import arrow from "/arrow.svg";

const DishesBottomOption = ({counter}:any) => {
    return (
        <div className="dishesBottomOption">
            <div className="dishesBottomOptionContainer">
                <div className="leftContent">
                    <div className="image">
                        <img src={burger} alt="" />
                    </div>
                    <div className="itemSelected">
                        <span>{counter} food item selected</span>
                    </div>
                </div>
                <div className="arrow">
                    <img src={arrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default DishesBottomOption