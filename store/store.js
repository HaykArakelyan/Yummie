import { configureStore, combineReducers } from "@reduxjs/toolkit";
import getOrders from "./ordersReducers";
import getFilters from "./filterReducers";

const reducer = combineReducers({
    getOrders,
    getFilters,
})

export const Store = configureStore({ reducer })
