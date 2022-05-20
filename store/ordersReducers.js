import { FILTER_ORDERS, GET_ORDERS } from "./actions";
import fetchFood from "../store/food.js";
const getFromApi = async () => {
    const result = await fetchFood();
    return result;
}
const initialState = {
    orders: getFromApi()
}

function getOrdersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ORDERS:
            return state;
        default:
            return state;
    }
}

export default getOrdersReducer;