import React from 'react';

import Drawer from "./components/Common/Drawer";
import Sidebar from "./components/Common/Sidebar";
import { useSelector } from "react-redux";
import TasksPage from "./components/Pages/TasksPage";
import CompletedPage from "./components/Pages/CompletedPage";
import DeletedPage from "./components/Pages/DeletedPage";
import {Routes, Route} from "react-router-dom";
import ImportantPage from "./components/Pages/ImportantPage";

const App = () => {

    const tasks = useSelector((state) => state.todoReducer.items)
    const deletedTasks = useSelector((state) => state.todoReducer.deletedItems)

    const redTag = useSelector((state) => state.todoReducer.redTag)
    const orangeTag = useSelector((state) => state.todoReducer.orangeTag)
    const greenTag = useSelector((state) => state.todoReducer.greenTag)
    const purpleTag = useSelector((state) => state.todoReducer.purpleTag)


    const isOpened = useSelector((state) => state.todoReducer.todoFormIsOpen)


    return (
        <>
            <Drawer isOpened={isOpened}/>
            <div className="todo">
                <Sidebar
                    redTag={redTag}
                    orangeTag={orangeTag}
                    greenTag={greenTag}
                    purpleTag={purpleTag}
                />
                <div className="todo__tasks">
                    <Routes>
                        <Route path="/" element={
                            <TasksPage
                                tasks={tasks}
                                redTag={redTag}
                                orangeTag={orangeTag}
                                greenTag={greenTag}
                                purpleTag={purpleTag}
                            />
                        }/>
                        <Route path="/completed" element={
                            <CompletedPage
                                tasks={tasks}
                                redTag={redTag}
                                orangeTag={orangeTag}
                                greenTag={greenTag}
                                purpleTag={purpleTag}
                            />
                        }/>
                        <Route path="/deleted" element={
                            <DeletedPage
                                deletedTasks={deletedTasks}
                                redTag={redTag}
                                orangeTag={orangeTag}
                                greenTag={greenTag}
                                purpleTag={purpleTag}
                            />
                        }/>
                        <Route path="/important" element={
                            <ImportantPage
                                tasks={tasks}
                                red={redTag}
                                orange={orangeTag}
                                green={greenTag}
                                purple={purpleTag}
                            />
                        }/>
                    </Routes>
                </div>

            </div>

        </>
    );
};

export default App;