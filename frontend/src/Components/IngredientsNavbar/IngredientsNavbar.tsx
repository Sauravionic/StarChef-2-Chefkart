import "./IngredientsNabar.scss";
import backbutton from "/back_button.svg";
import { useNavigate } from 'react-router-dom';

const IngredientsNavbar = () => {
    const navigate = useNavigate();
    const backClickHandler = () => {
        navigate(-1);
    }
    return (
        <div className="ingredientsNavbar">
            <div className="ingredientsNavbarContainer">
                <div className="backbutton">
                    <button onClick={backClickHandler}>
                        <img src={backbutton} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default IngredientsNavbar