import { GET_FILTERS } from "./actions";

const initialState = {
    filters: [
        {
            type: "All Menu",
            isActive: true
        },
        {
            type: "Breakfast",
            isActive: false
        },
        {
            type: "Beverages",
            isActive: false
        },
        {
            type: "Launch",
            isActive: false
        },
        {
            type: "Snacks",
            isActive: false
        }
    ]
}

function getFiltersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FILTERS:
            return state;
        default:
            return state;
    }
}

export default getFiltersReducer;