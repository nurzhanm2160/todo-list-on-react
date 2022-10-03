import React from 'react';

import modalIcon from '../../../../assets/modalIcon/modalWindowImg.png'
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, toggleModalIsOpen, toggleOverlayIsOpened} from "../../../../redux/reducers/todoReducer";

const DeleteModal = () => {
    const dispatch = useDispatch()

    const onCancel = () => {
        dispatch(toggleOverlayIsOpened(false))
    }

    const deletingInProgressItemId = useSelector(state => state.todoReducer.deletingInProgressItemId)

    const onConfirm = () => {
        dispatch(deleteTodo(deletingInProgressItemId))
        dispatch(toggleOverlayIsOpened(false))
        dispatch(toggleModalIsOpen(false))
    }

    return (
        <>
            <div className="modal-container">
                <div className="modal">
                    <div className="modal-icon">
                        <img src={modalIcon} alt="modalIcon"/>
                    </div>
                    <div className="modal-text">
                        Вы уверены?
                        <span>Вы не сможете восстановить это</span>
                    </div>
                    <div className="modal-buttons">
                        <button onClick={onConfirm} className="customButton">Да, удалить</button>
                        <button onClick={onCancel} className="customButtonWithoutBG">Отмена</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteModal;