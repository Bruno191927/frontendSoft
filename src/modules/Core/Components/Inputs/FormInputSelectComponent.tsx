import { Field } from "formik";

interface ItemSelectProp{
  value:string;
  name:string
}

interface FormSelectComponentProp{
  items:ItemSelectProp[];
  placeholder:string;
  name:string;
  nameSelect:string;
  label:string;
}

const FormSelectComponent = ({items,placeholder,name,nameSelect,label}:FormSelectComponentProp) => {
  return (
    <div className="form-select">
      <div className="form-select__select">
        <Field as="select" name={nameSelect} id={nameSelect} className="form-select__select__options">
          {
            items.map((item,index) => <option key={index} value={item.value} className="form_select__select--option">{item.name}</option>)
          }
        </Field>
      </div>
      <div className="form-select__input">
        <label className="form-input__label">{label}</label>
        <Field type="text" name={name} className="form-input__input" placeholder={placeholder}/>
      </div>
    </div>
  )
}

export default FormSelectComponent