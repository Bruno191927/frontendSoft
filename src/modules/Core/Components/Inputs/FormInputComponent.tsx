import { Field } from "formik";

interface FormInputComponentProp {
    name: string;
    label: string;
    placeholder:string;
    type?: 'text' | 'number'
}

const FormInputComponent = ({ name, label,placeholder,type='text' }: FormInputComponentProp) => {
    return (
        <div className="form-input">
            <label className="form-input__label">{label}</label>
            <Field type={type} name={name} className="form-input__input" placeholder={placeholder}/>
        </div>
    )
}

export default FormInputComponent