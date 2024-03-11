import { useNavigate } from "react-router-dom"
import ButtonComponent from "../../Core/Components/Buttons/ButtonComponent"
import FormInputCheckboxComponent from "../../Core/Components/Inputs/FormInputCheckboxComponent"
import FormInputComponent from "../../Core/Components/Inputs/FormInputComponent"
import FormSelectComponent from "../../Core/Components/Inputs/FormInputSelectComponent"
import { ErrorMessage, Form, Formik } from "formik"
import { ContactInformation, PersonalInformation } from "../Interface/User"
import * as Yup from 'yup';
import { useMutation } from "@tanstack/react-query"
import { getUser } from "../Services/UserApi"
import { userStore } from "../Store/UserStore"
import { useState } from "react"



const HomeFormComponent = () => {
  const setUserStore = userStore((state) => state.setUser);
  const navigate = useNavigate();
  const [contact,setContact] = useState<ContactInformation>({
    acceptComercialPolicy:false,
    acceptPrivacityPolicy:false,
    cellphone:'',
    document:'',
    documentType:''
  })
  const getUserMutation = useMutation({
    mutationFn: getUser,
    onSuccess: (data: PersonalInformation) => {
      setUserStore({
        personal: data,
        contact: contact
      
      });
      navigate('/plans')
    },
    onError: (error) => {
      console.log(error);
    }
  })

  const initialValues: ContactInformation = {
    cellphone: '',
    document: '',
    documentType: 'dni',
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
  return (
    <div className="home__form">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false)
          setContact(values);
          getUserMutation.mutate();
        }}
        validationSchema={formSchema}
      >
        {() => (
          <Form>

            <p className="home__form__description">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
            <FormInputComponent label="Celular" type="number" name="cellphone" placeholder="5130216147" />
            <ErrorMessage name="cellphone" children={(err) => (<p className="error">{err}</p>)}/>
            <FormSelectComponent
              label="Nro. de documento"
              items={[
                { name: 'DNI', value: 'dni' },
                { name: 'Carnet', value: 'carnet' },
              ]}
              placeholder="30216147"
              name="document"
              nameSelect="documentType"
              type="number"
            />
            <ErrorMessage name="document" children={(err) => (<p className="error">{err}</p>)}/>
            <ErrorMessage name="documentType" children={(err) => (<p className="error">{err}</p>)}/>
            <FormInputCheckboxComponent label="Acepto la Política de Privacidad" name="acceptComercialPolicy" />
            <ErrorMessage name="acceptComercialPolicy" children={(err) => (<p className="error">{err}</p>)}/>
            <FormInputCheckboxComponent label="Acepto la Política Comunicaciones Comerciales" name="acceptPrivacityPolicy" />
            <ErrorMessage name="acceptPrivacityPolicy" children={(err) => (<p className="error">{err}</p>)}/>
            <a href="#" target="_blank" rel="terminos" className="home__form__link">Aplican Términos y Condiciones.</a>
            <ButtonComponent name="Cotiza Aqui" buttonType="submit" />

          </Form>
        )}
      </Formik>
    </div>
  )
}

export default HomeFormComponent