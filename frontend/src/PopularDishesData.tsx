import axios from "axios";

const getData: any = async () => {
    await axios.get("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/")
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log("Error Fetching Data", error);
    })
}

export const popularDishes = await getData().popularDishes;
export const dishes = getData().dishes;
