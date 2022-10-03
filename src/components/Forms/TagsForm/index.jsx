import React from 'react';

const TagsForm = ({formik}) => {
    return (
        <div className="tags">
            <span>Тэги</span>
            <div className="columns">
                <div className="column">
                    <input
                        id="purple"
                        name="purple"
                        checked={formik.values.purple}
                        onChange={formik.handleChange}
                        type="checkbox"
                    />
                    <span>Продуктивность</span>
                </div>
                <div className="column">
                    <input
                        id="orange"
                        name="orange"
                        checked={formik.values.orange}
                        onChange={formik.handleChange}
                        type="checkbox"
                    />
                    <span>Здоровье</span>
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <input
                        id="green"
                        name="green"
                        checked={formik.values.green}
                        onChange={formik.handleChange}
                        type="checkbox"
                    />
                    <span>Образование</span>
                </div>
                <div className="column">
                    <input
                        id="red"
                        name="red"
                        checked={formik.values.red}
                        onChange={formik.handleChange}
                        type="checkbox"
                    />
                    <span>Срочно</span>
                </div>
            </div>
        </div>
    );
};

export default TagsForm;