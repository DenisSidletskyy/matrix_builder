import {
    setInitialMatrix,
    setMatrix,
    increaseValue,
    addRow,
    deleteRow,
    showPercents,
    showNearest,
    hideNearest,
    hidePercents,
    setCellsId,
    setRandomParameters
} from "./matrixOperations";

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

let defaultState = {
    parameters: {},
    initialMatrix: [],
    matrix: [],
}

export function matrixReducer (state = defaultState, action) {
    switch (action.type) {

        case SET_PARAMETERS: return {
            ...state,
            parameters: {...action.parameters}
        }

        case SET_RANDOM_PARAMETERS: return {
            ...state,
            parameters: setRandomParameters(action.maxColumnCount)
        }

        case SET_INITIAL_MATRIX: return {
            ...state,
            initialMatrix: setInitialMatrix({...state.parameters})
        }

        case SET_CELLS_ID: return {
            ...state,
            initialMatrix: setCellsId(state.initialMatrix)
        }

        case SET_MATRIX: return {
            ...state,
            matrix: setMatrix(state.initialMatrix.map(row => row.map(cell => ({...cell}))))
        }

        case INCREASE_VALUE: return {
            ...state,
            initialMatrix: increaseValue(state.initialMatrix.map(row => row.map(cell => ({...cell}))), action.id)
        }

        case ADD_ROW: return {
            ...state,
            initialMatrix: addRow(state.initialMatrix.map(row => row.map(cell => ({...cell}))))
        }

        case DELETE_ROW: return {
            ...state,
            initialMatrix: deleteRow(state.initialMatrix.map(row => row.map(cell => ({...cell}))), action.id)
        }

        case SHOW_PERCENTS: return {
            ...state,
            matrix: showPercents(state.matrix.map(row => row.map(cell => ({...cell}))), action.id)
        }

        case HIDE_PERCENTS: return {
            ...state,
            matrix: hidePercents(state.matrix.map(row => row.map(cell => ({...cell}))), action.id)
        }

        case SHOW_NEAREST: return {
            ...state,
            matrix: showNearest(state.matrix.map(row => row.map(cell => ({...cell}))), state.parameters.cells,  action.currentCell)
        }

        case HIDE_NEAREST: return {
            ...state,
            matrix: hideNearest(state.matrix.map(row => row.map(cell => ({...cell}))))
        }

        default: return state
    }
}