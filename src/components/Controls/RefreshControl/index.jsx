import React from 'react';
import refreshSvg from "../../../assets/icons/refresh.svg";
import {useDispatch} from "react-redux";
import {refreshTodo} from "../../../redux/reducers/todoReducer";

const RefreshControl = ({deletedId}) => {
    const dispatch = useDispatch()

    const onRefreshTodo = () => {
        dispatch(refreshTodo(deletedId))
    }

    return (
        <>
            <i onClick={onRefreshTodo}>
                <img src={refreshSvg} alt="Refresh"/>
            </i>
        </>
    );
};

export default RefreshControl;