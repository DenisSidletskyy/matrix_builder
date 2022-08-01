import Button from "../button/Button";
import Page from "../page/Page";
import Home from "./Home";

const HomePage = ({currentPage, setCurrentPage, setHiddenButton}) => {
    return (
        <Page
            visible={currentPage === "home"}
            className={"home"}
            direction={currentPage === "matrix" ? "leftToRight" : "rightToLeft"}
            exitHandler={() => setHiddenButton(true)}
        >
            <Home />

            <Button classname={"toBuilder"}
                    text={"builder"}
                    handler={() => setCurrentPage("builder")}/>

            <Button classname={"toMatrix"}
                    text={"matrix"}
                    handler={() => setCurrentPage("matrix")}/>
        </Page>
    )
}

export default HomePage