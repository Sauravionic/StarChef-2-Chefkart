import FoodMenuCard from "../FoodMenuCard/FoodMenuCard";
import "./RecommendSection.scss";
import down from "/down.svg";
import { useState, useEffect } from 'react';
import axios from 'axios';

const RecommendSection = () => {

    const [food, setFood] = useState([]);
    const fetchData = async () => {

        await axios.get("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/")
            .then(response => {
                const newDataArray: any = [...response.data.dishes, ...response.data.dishes];
                setFood(newDataArray);
            })
            .catch(error => {
                console.log("Error Fetching Data", error);
        })
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="recommendSection">
            <hr/>
            <div className="recommendSectionContainer">
                <div className="recommendHeader">
                    <div className="heading">

                        <h1>Recommended</h1>
                        <img src={down} alt="" />
                    </div>
                    <div className="menuButton">
                        <button>Menu</button>
                    </div>
                </div>

                <div className="foodMenuSection">
                    <div className="foodMenuSectionContainer">
                        {food.map((dish) => {
                            return (
                                <FoodMenuCard item={ dish } />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendSection