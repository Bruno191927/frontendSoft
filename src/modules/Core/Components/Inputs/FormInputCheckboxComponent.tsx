import { Field } from "formik";

interface FormInputCheckboxComponentProp {
    name: string;
    label: string;
}

const FormInputCheckboxComponent = ({name,label}:FormInputCheckboxComponentProp) => {
    return (
        <div className="input-checkbox">
            <Field type='checkbox' id={name} name={name} className="input-checkbox--checkbox"/>
            <label htmlFor={name} className="input-checkbox--label">{label}</label>
        </div>
    )
}

export default FormInputCheckboxComponent