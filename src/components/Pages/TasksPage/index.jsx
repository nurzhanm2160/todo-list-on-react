import React, { useState} from 'react';
import Search from "../../Common/Search";
import Title from "../../Common/Title";
import Task from "../../Common/Task";
import {useDispatch, useSelector} from "react-redux";
import { setTodos } from "../../../redux/reducers/todoReducer";

const TasksPage = ({tasks}) => {

    const dispatch = useDispatch()

    const [currentItem, setCurrentItem] = useState(null)

    function dragStartHandler(e, item) {
        console.log('drag', item)
        setCurrentItem(item)
    }

    function dragEndHandler(e) {
        //e.target.style.background = '#3B4253'

    }

    function dragOverHandler(e) {
        e.preventDefault()
        // e.target.style.background = '#242C43'
    }

    function dropHandler(e, item) {
        e.preventDefault()
        dispatch(setTodos(tasks.map((todo) => {
            if (todo.id === item.id) {
                return {...todo, order: currentItem.order}
            }
            if (todo.id === currentItem.id) {
                return {...todo, order: item.order}
            }

            return todo
        })))
    }

    const sortTodos = (a, b) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }

    const searchItems = useSelector((state) => state.todoReducer.searchedItems)

    return (<>
            <Search />

            <Title title="Мои задачи"/>

            {searchItems && searchItems.map((item) =>
                <Task
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    finished={item.finished}
                    important={item.important}
                    tags={item.tags}
                    date={item.date}
                />
            )}

            {searchItems.length === 0 && tasks.sort(sortTodos).map((item) =>
                !item.finished && <div
                key={item.id}
                draggable={true}
                onDragStart={(e) => dragStartHandler(e, item)}
                onDragLeave={(e) => dragEndHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropHandler(e, item)}
            >
                <Task
                    id={item.id}
                    title={item.title}
                    finished={item.finished}
                    important={item.important}
                    tags={item.tags}
                    date={item.date}
                    isDeleted={false}
                    description={item.description}
                />
            </div>)}

            <div className="more">
                <span>
                    открыть еще 5 задач
                </span>
            </div>
        </>);
};

export default TasksPage;