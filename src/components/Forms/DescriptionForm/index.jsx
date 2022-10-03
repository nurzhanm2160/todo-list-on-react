import React from 'react';

const DescriptionForm = ({formik}) => {
    return (
        <div className={formik.errors.description ? "description-red" : "description"}>
            <label>Описание задачи</label>
            <textarea
                id="description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                cols={3}
                placeholder="Описание задачи"
            />
            {formik.errors.description && formik.touched.description ? (
                <div className="errorMessage">{formik.errors.description}</div>
            ) : null}
        </div>
    );
};

export default DescriptionForm;