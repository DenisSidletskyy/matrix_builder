import Button from "../button/Button";
import Page from "../page/Page";
import Home from "./Home";

const HomePage = ({currentPage, setCurrentPage, setHiddenButton, hiddenButton}) => {
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
                    handler={() => setCurrentPage("matrix")}
                    hidden={hiddenButton.matrix}/>
        </Page>
    )
}

export default HomePage