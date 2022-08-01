import Button from "../button/Button";
import Page from "../page/Page";
import Matrix from "./Matrix";

const MatrixPage = ({currentPage, setCurrentPage, hiddenButton, setHiddenButton}) => {
    return (
        <Page
            visible={currentPage === "matrix"}
            className={"matrix"}
            direction={currentPage === "home" ? "topToDown" : "rightToLeft"}
            enterHandler={() => setTimeout(() => setHiddenButton(false), 1000)}
        >
            <Matrix />

            <Button classname={"toHome"}
                    text={"home"}
                    handler={() => setCurrentPage("home")}/>

            <Button classname={"toBuilder"}
                    text={"builder"}
                    handler={() => setCurrentPage("builder")}
                    hidden={hiddenButton}/>
        </Page>
    )
}

export default MatrixPage