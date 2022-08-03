import s from './Page.module.sass'
import {CSSTransition} from "react-transition-group";

const Page = ({children, visible, className, handler, direction}) => {

    return (
        <CSSTransition
            in={visible}
            timeout={1000}
            classNames={{
                enter: s[className + "Enter"],
                enterActive: s[className + "EnterActive"],
                exit: s[className + "Exit"],
                exitActive: s[className + "ExitActive"]
            }}
            unmountOnExit
            onEnter={handler && handler}
        >
            <div className={`${s.page} ${s[className]} ${s[direction]}`}>
                {children}
            </div>
        </CSSTransition>
    )
}

export default Page