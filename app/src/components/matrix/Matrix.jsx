import s from './Matrix.module.sass'
import {useDispatch, useSelector} from "react-redux";
import MatrixRow from "./MatrixRow";
import {useState} from "react";
import {CSSTransition} from "react-transition-group";
import {addRowAC, setCellsIdAC, setMatrixAC} from "../../redux/actionCreators";

const Matrix = () => {

    const dispatch = useDispatch()

    const [mousePosition, setMousePosition] = useState(0)
    const [matrixVisibility, setMatrixVisibility] = useState(true)

    const hideMatrix = () => {
        setMatrixVisibility(false)
        setTimeout(() => setMatrixVisibility(true), 300)
    }

    const onClick = () => {
        hideMatrix()
        setTimeout(() => {
            dispatch(addRowAC())
            dispatch(setCellsIdAC())
            dispatch(setMatrixAC())
            setMatrixVisibility(true)
        }, 300)
    }

    const matrix = useSelector(state => state.matrixData.matrix)

    return (
       <>
           <CSSTransition
               in={matrixVisibility}
               appear={true}
               timeout={3000}
               classNames={{
                   appear: s.matrixAppear,
                   appearActive: s.matrixAppearActive,
                   enter: s.matrixEnter,
                   enterActive: s.matrixEnterActive,
                   exit: s.matrixExit,
                   exitActive: s.matrixExitActive
               }}
           >
               <div className={s.matrix}>
                   {matrix.map((row, i) =>
                       <MatrixRow
                           key={i} row={row} i={i}
                           length={matrix.length}
                           mousePosition={mousePosition}
                           setMousePosition={setMousePosition}
                           hideMatrix={hideMatrix}/>)}
               </div>
           </CSSTransition>
           <button className={s.matrix__add} onClick={onClick}>add row</button>
       </>
    )
}

export default Matrix