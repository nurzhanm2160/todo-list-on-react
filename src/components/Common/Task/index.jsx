import React from 'react';

import {
    finishTodo, setDeletingInProgressItemId, setEditedTodo,
    setGreenTag, setIsEditing,
    setOrangeTag,
    setPurpleTag,
    setRedTag, toggleModalIsOpen, toggleOverlayIsOpened, toggleTodoForm
} from "../../../redux/reducers/todoReducer";
import {useDispatch} from "react-redux";
import DeleteMoveControls from "../../Controls/DeleteMoveControls";
import TagsControls from "../../Controls/TagsControls";
import RefreshControl from "../../Controls/RefreshControl";


const Task = ({id, title, finished, important, tags, date, isDeleted, description}) => {


    const dispatch = useDispatch()

    const onDeleteTodo = () => {
        dispatch(setDeletingInProgressItemId(id))
        dispatch(toggleModalIsOpen(true))
        dispatch(toggleOverlayIsOpened(true))
    }

    const onFinishedChange = () => {
        dispatch(finishTodo(id, finished))
    }

    const onSetEditedTodo = () => {
        dispatch(setEditedTodo(id, title, important, date, description, tags))
        dispatch(setIsEditing(true))
        dispatch(toggleOverlayIsOpened(true))
        dispatch(toggleTodoForm())
    }


    return (
        <div className="task">
            <div className="task__information">
                <input checked={finished} onChange={() => onFinishedChange()} id="checkbox" type="checkbox"/>
                <span onClick={onSetEditedTodo} className={important ? "task__important" : ""}>{title}</span>
            </div>
            <div className="task__interface">
                <TagsControls
                    green={tags.green}
                    purple={tags.purple}
                    red={tags.red}
                    orange={tags.orange}
                    onSetGreenTag={() => dispatch(setGreenTag())}
                    onSetPurpleTag={() => dispatch(setPurpleTag())}
                    onSetRedTag={() => dispatch(setRedTag())}
                    onSetOrangeTag={() => dispatch(setOrangeTag())}
                />
                <em>{date}</em>
                {isDeleted ?
                    <RefreshControl deletedId={id} />
                    :
                    <DeleteMoveControls onDeleteTodo={onDeleteTodo} />
                }

            </div>
        </div>
    );
};

export default Task;