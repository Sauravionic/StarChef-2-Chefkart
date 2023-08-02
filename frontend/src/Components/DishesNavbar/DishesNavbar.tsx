import "./DishesNavbar.scss";
import back_button from "/back_button.svg";

const DishesNavbar = () => {
    return (
        <div className="dishesNavbar">
            <div className="dishesNavbarContainer">
                <div className="backButton">
                    <button>
                        <img src= {back_button}></img>
                    </button>
                </div>
                <div className="selectDishesText">
                    <span>Select Dishes</span>
                </div>
            </div>
        </div>
    )
}

export default DishesNavbar