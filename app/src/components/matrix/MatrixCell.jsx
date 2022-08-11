import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {
    hideNearestAC, hidePercentsAC,
    increaseValueAC,
    setCellsIdAC,
    setMatrixAC,
    showNearestAC,
    showPercentsAC
} from "../../redux/actionCreators";
import s from "./Matrix.module.sass";

const MatrixCell = ({cell, i, mousePosition, setMousePosition}) => {

    const [isHover, setIsHover] = useState(false)

    const dispatch = useDispatch()

    const onClick = useCallback((cell) => {
        if (cell.type === "common") {
            dispatch(increaseValueAC(cell.id))
            dispatch(setCellsIdAC())
            dispatch(setMatrixAC())
        }
    }, [])

    const onEnter = useCallback((cell, i) => {
        setIsHover(true)
        if (cell.type === "common") {
            dispatch(showNearestAC(cell))
        } else if (cell.type === "sum") {
            dispatch(showPercentsAC(i))
        }
    }, [])

    const onLeave = useCallback((cell) => {
        setIsHover(false)
        if (cell.type === "common") {
            dispatch(hideNearestAC())
        } else if (cell.type === "sum") {
            dispatch(hidePercentsAC())
        }
    }, [])

    const onMove = (event) => {
        setMousePosition({
            x: event.nativeEvent.offsetX - event.target.offsetWidth / 2,
            y: event.nativeEvent.offsetY - event.target.offsetHeight / 2
        })
    }

    return (
        <span className={s.matrix__cell}>
            <span id={cell.id}
                  className={`${s.cell} ${s[cell.type]} ${cell.percentMode && s.percent} ${cell.nearestMode && s.nearest}`}
                  onClick={() => onClick(cell)}
                  onMouseEnter={() => onEnter(cell, i)}
                  onMouseMove={onMove}
                  onMouseLeave={() => onLeave(cell)}
                  style={(isHover || cell.nearestMode) && cell.type === "common"
                      ? {transform: `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale(1.12)`}
                      : null}
            >
            {
                cell.percentMode ?
                    <>
                        <span className={s.percent__scale} style={{height: `${cell.percentValue}%`}}/>
                        <span className={s.percent__value}>{cell.percentValue}%</span>
                    </>
                    : cell.value
            }
            </span>
        </span>
    )
}

export default MatrixCell