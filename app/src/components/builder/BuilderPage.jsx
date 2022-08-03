import Button from "../button/Button";
import Page from "../page/Page";
import BuilderContainer from "./BuilderContainer";

const BuilderPage = ({currentPage, setCurrentPage, hiddenButton, setHiddenButton}) => {
    return (
        <Page
            visible={currentPage === "builder"}
            className={"builder"}
            direction={currentPage === "home" ? "topToDown" : "leftToRight"}
            handler={() => {
                setHiddenButton(prevState => ({...prevState, home: true}))
                setTimeout(() => setHiddenButton(prevState => ({...prevState, home: false})), 1000)
            }}
        >
            <BuilderContainer setCurrentPage={setCurrentPage}/>

            <Button classname={"toHome"}
                    text={"home"}
                    handler={() => setCurrentPage("home")}
                    hidden={hiddenButton.home}/>

        </Page>
    )
}

export default BuilderPage