import {useDispatch} from "react-redux";
import {deleteRowAC, setCellsIdAC, setMatrixAC} from "../../redux/actionCreators";
import s from "./Matrix.module.sass";
import MatrixCell from "./MatrixCell";
import {useCallback} from "react";

const MatrixRow = ({row, i, length, mousePosition, setMousePosition, hideMatrix}) => {

    const dispatch = useDispatch()

    const onClick = useCallback((i) => {
        hideMatrix()
        setTimeout(() => {
            dispatch(deleteRowAC(i))
            dispatch(setCellsIdAC())
            dispatch(setMatrixAC())
        }, 300)
    }, [])

    return (
        <div className={s.matrix__row}>
            {row.map((cell, j) =>
                <MatrixCell key={j}
                            cell={cell}
                            i={i}
                            j={j}
                            mousePosition={mousePosition}
                            setMousePosition={setMousePosition}
                />
            )}
            {
                <span className={s.matrix__cell}>
                    {i !== 0 && i !== length - 1
                        ? <button disabled={length < 4} className={s.matrix__delete} onClick={() => onClick(i)}>&#10006;</button> : null
                    }
                </span>
            }
        </div>
    )
}

export default MatrixRow