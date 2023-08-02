import "./DishesHero.scss";
import calendar from "/calendar.svg";
import time from "/time.svg";

const DishesHero = () => {
    return (
        <div className="dishesHero">
            <div className="dishesHeroContainer">
                <div className="blackArea">

                </div>
                <div className="whiteArea">
                    <div className="calendar">
                        <div className="calendarComponent">
                            <div className="calendarArea">
                                <div className="calendarImg">
                                    <img src={ calendar } alt="" />
                                </div>
                                <div className="date">
                                    <span>21 May 2021</span>
                                </div>
                            </div>
                            <hr/>
                            <div className="timeArea">
                                <div className="timeImg">
                                    <img src={time} alt="" />
                                </div>
                                <div className="timeRange">
                                    <span>10:30 Pm-12:30 Pm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="foodCategory">
                    <div className="foodCategoryContainer">
                        <div className="foodCategoryButton">
                            <button>Indian</button>
                        </div>
                        <div className="foodCategoryButton">
                            <button>Italian</button>
                        </div>
                        <div className="foodCategoryButton">
                            <button>Indian</button>
                        </div>
                        <div className="foodCategoryButton">
                            <button>Chinese</button>
                        </div>
                        <div className="foodCategoryButton">
                            <button>American</button>
                        </div>
                        <div className="foodCategoryButton">
                            <button>French</button>
                        </div>
                        <div className="foodCategoryButton">
                            <button>Russain</button>
                        </div>
                        <div className="foodCategoryButton">
                            <button>Japanese</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DishesHero