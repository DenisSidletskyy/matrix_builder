import s from './Builder.module.sass'
import * as Yup from "yup";
import {useFormik} from "formik";
import InputError from "./InputError";
import {useDispatch} from "react-redux";
import {setCellsIdAC, setInitialMatrixAC, setMatrixAC, setParametersAC} from "../../redux/actionCreators";

const Builder = ({setCurrentPage}) => {

    const screenWidth = document.body.clientWidth > 500
        ? document.body.clientWidth
        : document.body.clientWidth * 1.05

    const dispatch = useDispatch()

    const createMatrix = (values) => {
        dispatch(setParametersAC(values))
        dispatch(setInitialMatrixAC())
        dispatch(setCellsIdAC())
        dispatch(setMatrixAC())
    }

    const initialValues = {columns: '', rows: '', cells: ''}

    const onSubmit = values => {
        createMatrix(values)
        setCurrentPage("matrix")
    }

    const validationSchema = Yup.object({
        columns: Yup.number().required('required').min(1).max(Math.floor(screenWidth / 85)),
        rows: Yup.number().required('required').min(1).max(20),
        cells: Yup.number().required('required').min(1).max(20),
    })


    const form = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <form onSubmit={form.handleSubmit} className={s.form}>

            <h2 className={s.title}>MATRIX BUILDER</h2>

            <div className={s.params}>
                <label htmlFor="columns" >Enter the number of columns</label>
                <input
                    id="columns"
                    name="columns"
                    type="number"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.columns}
                />
            </div>

            <div className={s.error}>
                <InputError visible={form.errors.columns && form.touched.columns}>
                    {form.errors.columns}
                </InputError>
            </div>

            <div className={s.params}>
                <label htmlFor="rows" >Enter the number of rows</label>
                <input
                    id="rows"
                    name="rows"
                    type="number"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.rows}
                />
            </div>

            <div className={s.error}>
                <InputError visible={form.errors.rows && form.touched.rows}>
                    {form.errors.rows}
                </InputError>
            </div>

            <div className={s.params}>
                <label htmlFor="cells" >Enter the number of cells</label>
                <input
                    id="cells"
                    name="cells"
                    type="number"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.cells}
                />
            </div>

            <div className={s.error}>
                <InputError visible={form.errors.cells && form.touched.cells}>
                    {form.errors.cells}
                </InputError>
            </div>

            <button className={s.submit} type="submit">create matrix</button>
        </form>
    )
}

export default Builder