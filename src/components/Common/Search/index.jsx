import React, {useEffect, useState} from 'react';
import searchSvg from "../../../assets/icons/search.svg";
import {useKeyPress} from "../../../hooks/useKeyPress";
import {useDispatch, useSelector} from "react-redux";
import {
    searchTodoInAll,
    setGreenTag,
    setOrangeTag,
    setPurpleTag,
    setRedTag
} from "../../../redux/reducers/todoReducer";

const Search = () => {
    const dispatch = useDispatch()

    const isEnterPressed = useKeyPress('Enter')
    const [searchText, setSearchText] = useState('')

    const redTag = useSelector((state) => state.todoReducer.redTag)
    const greenTag = useSelector((state) => state.todoReducer.greenTag)
    const purpleTag = useSelector((state) => state.todoReducer.purpleTag)
    const orangeTag = useSelector((state) => state.todoReducer.orangeTag)

    useEffect(() => {
        dispatch(searchTodoInAll(searchText))

        redTag && dispatch(setRedTag())
        greenTag && dispatch(setGreenTag())
        orangeTag && dispatch(setOrangeTag())
        purpleTag && dispatch(setPurpleTag())

    }, [isEnterPressed, dispatch])

    return (
        <div className="search">
            <i>
                <img src={searchSvg} alt="Search"/>
            </i>
            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} id="search" placeholder="Поиск"/>
        </div>
    );
};

export default Search;