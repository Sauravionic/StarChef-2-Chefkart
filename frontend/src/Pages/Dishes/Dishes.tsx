import DishesBottomOption from "../../Components/DishesBottomOption/DishesBottomOption";
import DishesHero from "../../Components/DishesHero/DishesHero";
import DishesNavbar from "../../Components/DishesNavbar/DishesNavbar";
import PopularDishes from "../../Components/PopularDishes/PopularDishes";
import RecommendSection from "../../Components/RecommendSection/RecommendSection";
import "./Dishes.scss";

const Dishes = () => {
    return (
        <div className="dishes">
            <DishesNavbar />
            <DishesHero />
            <PopularDishes />
            <RecommendSection />
            <DishesBottomOption/>
        </div>
    )
}

export default Dishes