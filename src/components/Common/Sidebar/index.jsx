import React from 'react';
import mailActive from "../../../assets/activeIcons/mailActive.svg";
import starSvg from "../../../assets/icons/star.svg";
import finishedSvg from "../../../assets/icons/finished.svg";
import bucketSvg from "../../../assets/icons/bucket.svg";
import purple from "../../../assets/tags/purple.svg";
import green from "../../../assets/tags/green.png";
import orange from "../../../assets/tags/orange.svg";
import red from "../../../assets/tags/red.svg";
import {Link} from "react-router-dom";
import {
    setEditedTodo,
    setGreenTag,
    setOrangeTag,
    setPurpleTag,
    setRedTag,
    toggleOverlayIsOpened
} from "../../../redux/reducers/todoReducer";
import {useDispatch} from "react-redux";

const Sidebar = ({setIsOpened, redTag, orangeTag, greenTag, purpleTag}) => {
    const dispatch = useDispatch()

    const onRedTag = () => {
        dispatch(setRedTag())
    }

    const onOrangeTag = () => {
        dispatch(setOrangeTag())
    }

    const onGreenTag = () => {
        dispatch(setGreenTag())
    }

    const onPurpleTag = () => {
        dispatch(setPurpleTag())
    }

    const onAddNewTodo = () => {
        dispatch(setEditedTodo(
            null,
            '',
            false,
            '',
            '',
            {
                purple: false,
                green: false,
                red: false,
                orange: false
            })
        )
        dispatch(toggleOverlayIsOpened(true))
    }

    return (
        <div className="todo__sidebar">
            <div className="button" onClick={() => onAddNewTodo()}>
                <Link>Новая задача</Link>
            </div>
            <ul className="todo__sidebar-items">
                <Link to={"/"}>
                    <li className={"todo__active-link"}>
                        <i>
                            <img src={mailActive} alt="mail"/>
                        </i>
                        <span>
                            Мои задачи
                        </span>
                    </li>
                </Link>
                <Link to={"/important"}>
                    <li>
                        <i>
                            <img src={starSvg} alt="mail"/>
                        </i>
                        <span>
                            Важные
                        </span>
                    </li>
                </Link>
                <Link to={"/completed"}>
                    <li>
                        <i>
                            <img src={finishedSvg} alt="mail"/>
                        </i>
                        <span>
                        Выполненные
                    </span>
                    </li>
                </Link>
                <Link to={"deleted"}>
                    <li>
                        <i>
                            <img src={bucketSvg} alt="mail"/>
                        </i>
                        <span>
                            Удаленные
                        </span>
                    </li>
                </Link>
            </ul>
            <div className="tag">
                    <span>
                        Тэги
                    </span>
            </div>
            <ul className="tags">
                <li className={purpleTag ? "todo__active-tag" : ""} onClick={() => onPurpleTag()}>
                    <i>
                        <img src={purple} alt="Purple"/>
                    </i>
                    <span>
                        Продуктивность
                    </span>
                </li>
                <li className={greenTag ? "todo__active-tag" : ""} onClick={() => onGreenTag()}>
                    <i>
                        <img src={green} alt="Green"/>
                    </i>
                    <span>
                        Образование
                    </span>
                </li>
                <li className={orangeTag ? "todo__active-tag" : ""} onClick={() => onOrangeTag()}>
                    <i>
                        <img src={orange} alt="Orange"/>
                    </i>
                    <span>
                        Здоровье
                    </span>
                </li>
                <li className={redTag ? "todo__active-tag" : ""} onClick={() => onRedTag()}>
                    <i>
                        <img src={red} alt="Red"/>
                    </i>
                    <span>
                        Срочно
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;