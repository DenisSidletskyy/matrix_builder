import s from './Button.module.sass'

const Button = ({text, handler, classname, hidden}) => {

    return (
        <button
            className={`${s.button} ${s[classname]} ${hidden && s.hidden}`}
            onClick={handler}
        >
            <div className={s.piece}>{text}</div>
        </button>
    )
}

export default Button
