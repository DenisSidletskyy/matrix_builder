import './App.sass';
import {useState} from "react";
import HomePage from "./components/home/HomePage";
import BuilderPage from "./components/builder/BuilderPage";
import MatrixPage from "./components/matrix/MatrixPage";

const App = () => {

    const [currentPage, setCurrentPage] = useState("home")
    const [hiddenButton, setHiddenButton] = useState({home: false, builder: false, matrix: false})

    return (
        <div className={"app"}>

            <HomePage currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      hiddenButton={hiddenButton}
                      setHiddenButton={setHiddenButton}/>

            <BuilderPage currentPage={currentPage}
                         setCurrentPage={setCurrentPage}
                         hiddenButton={hiddenButton}
                         setHiddenButton={setHiddenButton} />

            <MatrixPage currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        hiddenButton={hiddenButton}
                        setHiddenButton={setHiddenButton} />
        </div>
    )
}

export default App;
