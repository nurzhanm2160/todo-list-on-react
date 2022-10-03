import React from 'react';

const AddDeleteControls = () => {
    return (
        <div className="buttons">
            <button type="submit" className="customButton">
                Добавить
            </button>
            <button className="customButtonWithoutBG">
                Удалить
            </button>
        </div>
    );
};

export default AddDeleteControls;