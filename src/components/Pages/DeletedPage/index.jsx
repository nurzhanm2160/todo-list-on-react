import React from 'react';
import Search from "../../Common/Search";
import Title from "../../Common/Title";
import Task from "../../Common/Task";

const DeletedPage = ({deletedTasks}) => {

    return (
        <>
            <Search/>

            <Title title="Удаленные"/>


            {deletedTasks &&
                deletedTasks.map((item) =>
                    <Task
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        finished={item.finished}
                        important={item.important}
                        tags={item.tags}
                        date={item.date}
                        isDeleted={true}
                    />
                )
            }


            <div className="more">
                        <span>
                            открыть еще 5 задач
                        </span>
            </div>
        </>
    );
};

export default DeletedPage;