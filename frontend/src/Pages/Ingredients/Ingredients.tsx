import "./Ingredients.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import IngredientsNavbar from "../../Components/IngredientsNavbar/IngredientsNavbar";
import IngredientsName from "../../Components/IngredientsName/IngredientsName";
import IngredientsComp from "../../Components/IngredientsComp/IngredientsComp";

const Ingredients = () => {
    const { id } = useParams();
    const [foodIng, setFoodIng] = useState({});
    const [loading, setLoading] = useState(true);

    const url = `https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/${id}`
    console.log(foodIng);
    const fetchData = async () => {
        await axios.get(url)
            .then((response) => {
                setFoodIng(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
                setLoading(true);
        })
    }
    useEffect(() => {
        fetchData();
    }, [])
    
    if (loading) {
        return <div>Loading</div>
    }
    return (
        <div className="ingredients">
            <div className="ingredientsContainer">
                <IngredientsNavbar />
                <IngredientsName data = {foodIng} />
                <IngredientsComp data={foodIng} />
            </div>
        </div>
    )
}

export default Ingredients