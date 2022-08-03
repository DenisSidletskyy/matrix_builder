import s from './Builder.module.sass'
import {CSSTransition} from "react-transition-group";

const InputError = ({children, visible}) => {
    return (
        <CSSTransition
            in={visible}
            timeout={500}
            classNames={{
                enter: s.enter,
                enterActive: s.enterActive,
                enterDone: s.enterDone,
            }}
            unmountOnExit
        >
            <span className={s.error_message}>
                {children}
            </span>

        </CSSTransition>
    )
}

export default InputError