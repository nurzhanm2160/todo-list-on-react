import React from 'react';
import starSvg from "../../../assets/icons/star.svg";
import closeSvg from "../../../assets/icons/close.svg";

const FormHeader = ({onClose}) => {
    return (
        <div className="title">
            <span>Задача</span>
            <div>
                <i>
                    <img src={starSvg} alt="start"/>
                </i>
                <i onClick={() => onClose()}>
                    <img src={closeSvg} alt="close"/>
                </i>
            </div>
        </div>
    );
};

export default FormHeader;