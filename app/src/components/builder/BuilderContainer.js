import {connect} from "react-redux";
import {createMatrix} from "../../redux/thunkCreators";
import Builder from "./Builder";

const BuilderContainer = (props) => {
    return (
        <Builder {...props}/>
    )
}

export default connect(null, {createMatrix})(BuilderContainer)
