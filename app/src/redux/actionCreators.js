import {
    SET_INITIAL_MATRIX,
    SET_MATRIX,
    SET_PARAMETERS,
    INCREASE_VALUE,
    ADD_ROW,
    DELETE_ROW,
    SHOW_PERCENTS,
    SHOW_NEAREST, HIDE_NEAREST, HIDE_PERCENTS, SET_CELLS_ID, SET_RANDOM_PARAMETERS
} from "./actions";

export const setParametersAC = (parameters) => ({type: SET_PARAMETERS, parameters})
export const setRandomParametersAC = (maxColumnCount) => ({type: SET_RANDOM_PARAMETERS, maxColumnCount})
export const setInitialMatrixAC = () => ({type: SET_INITIAL_MATRIX})
export const setCellsIdAC = () => ({type: SET_CELLS_ID})
export const setMatrixAC = () => ({type: SET_MATRIX})
export const increaseValueAC = (id) => ({type: INCREASE_VALUE, id})
export const addRowAC = () => ({type: ADD_ROW})
export const deleteRowAC = (id) => ({type: DELETE_ROW, id})
export const showPercentsAC = (id) => ({type: SHOW_PERCENTS, id})
export const hidePercentsAC = () => ({type: HIDE_PERCENTS})
export const showNearestAC = (currentCell) => ({type: SHOW_NEAREST, currentCell})
export const hideNearestAC = () => ({type: HIDE_NEAREST})