import React from 'react';
import bucketSvg from "../../../assets/icons/bucket.svg";
import moveSvg from "../../../assets/icons/move.svg";

const DeleteMoveControls = ({onDeleteTodo}) => {
    return (
        <>
            <i onClick={() => onDeleteTodo()}>
                <img src={bucketSvg} alt="Trash"/>
            </i>
            <i>
                <img src={moveSvg} alt="Move"/>
            </i>
        </>
    );
};

export default DeleteMoveControls;