import React from 'react';

const TagsControls = ({green, purple, red, orange, onSetGreenTag, onSetPurpleTag, onSetRedTag, onSetOrangeTag}) => {
    return (
        <>
            {green && <span className="tag-green" onClick={onSetGreenTag}>Образование</span>}
            {purple && <span className="tag-purple" onClick={onSetPurpleTag}>Продуктивность</span>}
            {red && <span className="tag-red" onClick={onSetRedTag}>Срочно</span>}
            {orange && <span className="tag-orange" onClick={onSetOrangeTag}>Здоровье</span>}
        </>
    );
};

export default TagsControls;