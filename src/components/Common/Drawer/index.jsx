import {useDispatch, useSelector} from "react-redux";
import {addTodo, editTodo, setIsEditing, toggleOverlayIsOpened} from "../../../redux/reducers/todoReducer";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import DeleteModal from "../Modals/DeleteModal";
import AddEditFormModal from "../Modals/AddEditFormModal";

const Drawer = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [important, setImportant] = useState(false)
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [purpleTag, setPurpleTag] = useState(false)
    const [greenTag, setGreenTag] = useState(false)
    const [orangeTag, setOrangeTag] = useState(false)
    const [redTag, setRedTag] = useState(false)

    const editedItem = useSelector((state) => state.todoReducer.editedTodo)
    const isEditing = useSelector((state) => state.todoReducer.isEditing)
    const modalIsOpen = useSelector((state) => state.todoReducer.modalIsOpen)
    const overlayIsOpened = useSelector((state) => state.todoReducer.overlayIsOpened)

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title,
            important,
            date,
            description,
            purple: purpleTag,
            green: greenTag,
            red: redTag,
            orange: orangeTag,
        },
        validate: (values) => {
            const errors = {}

            if(!values.title){
                errors.title = "Название не может быть пустым"
            }

            if(!values.date){
                errors.date = "Дата не может быть пустой"
            }

            if(values.description.length > 50){
                errors.description = "Максимальная длина описания 50 символов"
            }

            return errors
        },

        onSubmit: values => {
            const {title, important, red, green, orange, purple, date, description} = values
            const tags = {purple, green, red, orange}

            //setIsEditing && dispatch(setEditedTodo( id, title, important, date, description, tags))
            isEditing && dispatch(editTodo(title, important, tags, date, description))
            !isEditing && dispatch(addTodo(title, important, tags, date, description))
        },
    })

    useEffect(() => {

        setTitle(editedItem.title)
        setImportant(editedItem.important)
        setDate(editedItem.date)
        setDescription(editedItem.description)

        setPurpleTag(editedItem.tags.purple)
        setGreenTag(editedItem.tags.green)
        setOrangeTag(editedItem.tags.orange)
        setRedTag(editedItem.tags.red)
    }, [editedItem, formik])


    const onClose = () => {
        dispatch(setIsEditing(false))
        dispatch(toggleOverlayIsOpened(false))
    }

    return (
        <div className={`overlay ${overlayIsOpened ? "overlayVisible" : " "}`}>
            {modalIsOpen ? <DeleteModal /> : null}
            <AddEditFormModal formik={formik} onClose={onClose} handleSubmit={formik.handleSubmit} />
        </div>
    )
}

export default Drawer
