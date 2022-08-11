import Button from "../button/Button";
import Page from "../page/Page";
import Home from "./Home";
import {useDispatch} from "react-redux";
import {setCellsIdAC, setInitialMatrixAC, setMatrixAC, setRandomParametersAC} from "../../redux/actionCreators";

const HomePage = ({currentPage, setCurrentPage, setHiddenButton, hiddenButton}) => {

    const screenWidth = document.body.clientWidth > 500
        ? document.body.clientWidth
        : document.body.clientWidth * 1.05

    const dispatch = useDispatch()

    const createRandomMatrix = () => {
        dispatch(setRandomParametersAC(Math.floor(screenWidth / 85)))
        dispatch(setInitialMatrixAC())
        dispatch(setCellsIdAC())
        dispatch(setMatrixAC())
        setCurrentPage("matrix")
    }

    return (
        <Page
            visible={currentPage === "home"}
            className={"home"}
            direction={currentPage === "matrix" ? "leftToRight" : "rightToLeft"}
            handler={() => {
                setHiddenButton(prevState => ({...prevState, builder: true, matrix: true}))
                setTimeout(() => setHiddenButton(prevState =>({...prevState, builder: false, matrix: false})), 1000)
            }}
        >
            <Home />

            <Button classname={"toBuilder"}
                    text={"builder"}
                    handler={() => setCurrentPage("builder")}
                    hidden={hiddenButton.builder}/>

            <Button classname={"toMatrix"}
                    text={"auto"}
                    handler={createRandomMatrix}
                    hidden={hiddenButton.matrix}/>
        </Page>
    )
}

export default HomePage