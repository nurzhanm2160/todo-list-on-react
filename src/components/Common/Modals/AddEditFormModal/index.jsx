import React from 'react';
import FormHeader from "../../../Forms/FormHeader";
import TitleForm from "../../../Forms/TitleForm";
import ImportantForm from "../../../Forms/ImportantForm";
import calendarSvg from "../../../../assets/icons/calendar.svg";
import DescriptionForm from "../../../Forms/DescriptionForm";
import TagsForm from "../../../Forms/TagsForm";
import AddDeleteControls from "../../../Controls/AddDeleteControls";

const AddEditFormModal = ({onClose, formik, handleSubmit}) => {
    return (
        <div className="drawer">
            <FormHeader onClose={onClose}/>

            <div className="form">
                <form onSubmit={handleSubmit}>

                    <TitleForm formik={formik} />

                    <ImportantForm formik={formik} />

                    <div className="calendar">
                        <label>Дата и время окончания</label>

                        <div className={formik.errors.date ? "calendar__input-red" : "calendar__input" }>
                            <input
                                id="date"
                                name="date"
                                value={formik.values.date}
                                onChange={formik.handleChange}
                                placeholder="Дата и время"
                            />
                            <i>
                                <img src={calendarSvg} alt="calendar"/>
                            </i>
                        </div>
                        {formik.errors.date && formik.touched.date ? (
                            <div className="errorMessage">{formik.errors.date}</div>
                        ) : null}
                    </div>

                    <DescriptionForm formik={formik} />

                    <TagsForm formik={formik} />

                    <AddDeleteControls />
                </form>
            </div>
        </div>
    );
};

export default AddEditFormModal;