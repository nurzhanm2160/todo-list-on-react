import React from 'react';

const TitleForm = ({formik}) => {
    return (
        <div className={formik.errors.title ? "name-red" : "name"}>
            <label>Название</label>
            <input
                id="title"
                name="title"
                type="text"
                value={formik.values.title}
                onChange={formik.handleChange}
                placeholder="Названия задачи"
            />
            {formik.errors.title && formik.touched.title ? (
                <div className="errorMessage">{formik.errors.title}</div>
            ) : null}
        </div>
    );
};

export default TitleForm;