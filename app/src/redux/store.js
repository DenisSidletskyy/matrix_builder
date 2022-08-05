import {configureStore} from "@reduxjs/toolkit";
import {matrixReducer} from "./matrixReducer";

export const store = configureStore({
    reducer: {
        matrixData: matrixReducer
    }
})