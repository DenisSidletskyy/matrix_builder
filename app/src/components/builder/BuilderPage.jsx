import Button from "../button/Button";
import Page from "../page/Page";
import Builder from "./Builder";

const BuilderPage = ({currentPage, setCurrentPage, hiddenButton, setHiddenButton}) => {
    return (
        <Page
            visible={currentPage === "builder"}
            className={"builder"}
            direction={currentPage === "home" ? "topToDown" : "leftToRight"}
            enterHandler={() => setTimeout(() => setHiddenButton(false), 1000)}
        >
            <Builder />

            <Button classname={"toHome"}
                    text={"home"}
                    handler={() => setCurrentPage("home")}/>

            <Button classname={"toMatrix"}
                    text={"matrix"}
                    handler={() => setCurrentPage("matrix")}
                    hidden={hiddenButton}/>
        </Page>
    )
}

export default BuilderPage