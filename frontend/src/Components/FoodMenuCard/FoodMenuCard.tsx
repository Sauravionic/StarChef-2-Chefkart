import "./FoodMenuCard.scss";
import dot from "/dot.svg";
import star from "/star.svg";
import { Link } from 'react-router-dom';
import refrigerator from "/refrigerator.svg"
import { useState } from "react";

const FoodMenuCard = ({ item, increaseCounter }: any) => {
    
    const [isClicked, setClicked] = useState(false);
    const addClickHandler = () => {
        setClicked((prevClicked) => !prevClicked); // Toggle the state on each click
        if (isClicked) {
            increaseCounter("dec");
        } else {
            increaseCounter("inc");
        }
    };
    return (
        <div className="foodMenuCard">
            <div className="foodMenuCardContainer">
                <div className="foodMenuContent">
                    <div className="header">
                        <h5>{item.name}</h5>
                        <img className="dotimg" src={dot} alt="" />
                        <div className="star">
                            <span>{item.rating}</span>
                            <img src={star} alt="" />
                        </div>
                    </div>
                    <div className="midContent">
                        <div className="lefticons">
                            {item.equipments.map((e:any) => {
                                return (
                                    <div className="icon1">
                                        <img src={refrigerator} alt="" />
                                        <span>{e}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <div className="midRightContent">
                            <span className="ingredientspan">Ingredients</span>
                            <Link to={`/ingredients/${item.id}`} className="link">
                                <span className="viewlist">View list {">"}</span>
                            </Link>
                        </div>
                    </div>
                    <div className="bottomContent">
                        <p>{item.description}</p>
                    </div>
                </div>
                <div className="foodMenuImage">
                    <div className="foodImage">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="foodAddButton">
                        <button onClick={addClickHandler}>
                            {isClicked ? "Added" : "Add"}
                        </button>
                        <span>{isClicked ? "-" : "+"}</span>
                    </div>
                </div>
            </div>
            <hr className="foodHr"/>
        </div>
    )
}

export default FoodMenuCard