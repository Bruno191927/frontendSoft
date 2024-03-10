import { useNavigate } from "react-router-dom"
import ButtonComponent from "../../Core/Components/Buttons/ButtonComponent"
import FormInputCheckboxComponent from "../../Core/Components/Inputs/FormInputCheckboxComponent"
import FormInputComponent from "../../Core/Components/Inputs/FormInputComponent"
import FormSelectComponent from "../../Core/Components/Inputs/FormInputSelectComponent"
import { Form, Formik } from "formik"
import { ContactInformation } from "../Interface/User"
import * as Yup from 'yup';



const FormComponent = () => {
  const initialValues: ContactInformation = {
    cellphone: '',
    document: '',
    documentType: '',
    acceptComercialPolicy: false,
    acceptPrivacityPolicy: false
  }


  const formSchema = Yup.object().shape({
    cellphone: Yup.string().required('Debes ingresar un numero de telefono').min(8, 'El numero de telefono debe tener minimo 8 caracteres'),
    document: Yup.string().required('Debes ingresar un numero de documento').min(8, 'El documento de identidad debe tener minimo 8 caracteres'),
    documentType: Yup.string().required('Debes seleccionar un tipo de documento'),
    acceptComercialPolicy: Yup.bool().required().oneOf([true], 'Debes aceptar la politica de privacidad'),
    acceptPrivacityPolicy: Yup.bool().required().oneOf([true], 'Debes aceptar la politicas de comunicacion comercial'),
  })

  const navigate = useNavigate();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
        navigate('/plans')
      }}
      validationSchema={formSchema}
    >
      {({errors}) => (
        <Form>
          <div className="home__form">
            <p className="home__form__description">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
            <p>{errors.acceptComercialPolicy}</p>
            <p>{errors.acceptPrivacityPolicy}</p>
            <p>{errors.cellphone}</p>
            <p>{errors.document}</p>
            <p>{errors.documentType}</p>
            <FormInputComponent label="Celular" name="cellphone" placeholder="5130216147" />
            <FormSelectComponent
              label="Nro. de documento"
              items={[
                { name: 'DNI', value: 'dni' },
                { name: 'Carnet', value: 'carnet' },
              ]}
              placeholder="30216147"
              name="document"
              nameSelect="documentType"
            />
            <FormInputCheckboxComponent label="Acepto la Política de Privacidad" name="acceptComercialPolicy" />
            <FormInputCheckboxComponent label="Acepto la Política Comunicaciones Comerciales" name="acceptPrivacityPolicy" />
            <a href="#" target="_blank" rel="terminos" className="home__form__link">Aplican Términos y Condiciones.</a>
            <ButtonComponent name="Cotiza Aqui" buttonType="submit"/>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormComponent