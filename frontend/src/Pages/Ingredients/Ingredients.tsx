import "./Ingredients.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Ingredients = () => {
    const { id } = useParams();
    const [foodIng, setFoodIng] = useState();
    const url = `https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/${id}`

    const fetchData = async () => {
        await axios.get(url)
            .then((response) => {
                setFoodIng(response.data);
            })
            .catch(error => {
                console.log(error);
        })
    }
    return (
        <div className="ingredients">
            <div className="ingredientsContainer">
                
            </div>
        </div>
    )
}

export default Ingredients