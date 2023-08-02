import { useState, useEffect } from 'react';
import PopularDishesCard from "../PopularDishesCard/PopularDishesCard";
import "./PopularDishes.scss";
import axios from "axios";

const PopularDishes = () => {

    const [popularDishData, setPopularDishData] = useState([]);

    const fetchData = async () => {

        await axios.get("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/")
            .then(response => {
                const newDataArray: any = [...response.data.popularDishes, ...response.data.popularDishes];
                setPopularDishData(newDataArray);
            })
            .catch(error => {
                console.log("Error Fetching Data", error);
        })
    }
    useEffect(() => {
        fetchData();
    }, [])
    
    return (
        <div className="popularDishes">
            <div className="popularDishesContainer">
                <div className="popularDishesHeading">
                    <h1>Popular Dishes</h1>
                </div>
                <div className="popularDishesCards">
                    <div className="popularDishesCardsContainer">
                        {popularDishData.map((data) => {
                            return (
                                <PopularDishesCard item={ data } />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularDishes