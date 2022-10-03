import React from 'react';
import Search from "../../Common/Search";
import Title from "../../Common/Title";
import Task from "../../Common/Task";

const ImportantPage = ({tasks}) => {
    return (
        <>
            <Search/>

            <Title title="Важные"/>

            {tasks.map((item) => item.important &&
                <Task
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    finished={item.finished}
                    tags={item.tags}
                    date={item.date}
                    isDeleted={false}
                />
            )}

            <div className="more">
                        <span>
                            открыть еще 5 задач
                        </span>
            </div>
        </>
    );
};

export default ImportantPage;