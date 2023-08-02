import "./PopularDishesCard.scss";

const PopularDishesCard = ({item}: any) => {
    
    return (
        <div className="popularDishesCard">
            <div className="popularDishesCardContainer">
                <div className="popularDishImage">
                    <img src={item.image} alt="" />
                </div>
                <div className="popularDishName">
                    <span>{item.name}</span>
                </div>
            </div>
        </div>
    )
}

export default PopularDishesCard