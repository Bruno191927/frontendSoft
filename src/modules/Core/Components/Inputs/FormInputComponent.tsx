import { Field } from "formik";

interface FormInputComponentProp {
    name: string;
    label: string;
    placeholder:string;
}

const FormInputComponent = ({ name, label,placeholder }: FormInputComponentProp) => {
    return (
        <div className="form-input">
            <label className="form-input__label">{label}</label>
            <Field type="text" name={name} className="form-input__input" placeholder={placeholder}/>
        </div>
    )
}

export default FormInputComponent