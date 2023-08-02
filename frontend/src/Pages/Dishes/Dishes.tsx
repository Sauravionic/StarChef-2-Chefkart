// Author >-  Saurav Srivastava
//Date >- 02/08/2023 -> 03/08/2023 

import DishesBottomOption from "../../Components/DishesBottomOption/DishesBottomOption";
import DishesHero from "../../Components/DishesHero/DishesHero";
import DishesNavbar from "../../Components/DishesNavbar/DishesNavbar";
import PopularDishes from "../../Components/PopularDishes/PopularDishes";
import RecommendSection from "../../Components/RecommendSection/RecommendSection";
import { useState } from 'react';
import "./Dishes.scss";

const Dishes = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div className="dishes">
            <DishesNavbar />
            <DishesHero />
            <PopularDishes />
            <RecommendSection counter={counter} setCounter = {setCounter}/>
            <DishesBottomOption counter={counter} />
        </div>
    )
}

export default Dishes