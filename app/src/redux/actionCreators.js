import {
    SET_INITIAL_MATRIX,
    SET_MATRIX,
    SET_PARAMETERS,
    INCREASE_VALUE,
    ADD_ROW,
    DELETE_ROW,
    SHOW_PERCENTS,
    SHOW_NEAREST, HIDE_NEAREST
} from "./actions";

export const setParameters = (parameters) => ({type: SET_PARAMETERS, parameters})
export const setInitialMatrix = () => ({type: SET_INITIAL_MATRIX})
export const setMatrix = () => ({type: SET_MATRIX})
export const increaseValue = (id) => ({type: INCREASE_VALUE, id})
export const addRow = () => ({type: ADD_ROW})
export const deleteRow = (id) => ({type: DELETE_ROW, id})
export const showPercents = (id) => ({type: SHOW_PERCENTS, id})
export const showNearest = (currentCell) => ({type: SHOW_NEAREST, currentCell})
export const hideNearest = () => ({type: HIDE_NEAREST})