import React from 'react';

const ImportantForm = ({formik}) => {
    return (
        <div className="important">
            <input
                checked={formik.values.important}
                onChange={formik.handleChange}
                id="important"
                name="important"
                type="checkbox" />
            <span>Важная задача</span>
        </div>
    );
};

export default ImportantForm;