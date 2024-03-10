import { useNavigate } from 'react-router-dom'
import { PeopleIconComponent } from '../../Core/Components/Icons'
import NavbarComponent from '../../Core/Components/Navbar/NavbarComponent'
import { userStore } from '../../Home/Store/UserStore'
import ReturnStepperComponent from '../Components/ReturnStepperComponent'
import StepperComponent from '../Components/StepperComponent'

const SummaryPage = () => {
  const userInfo = userStore((state) => state.user)
  const navigate = useNavigate()
  return (
    <div>
        <NavbarComponent/>
        <StepperComponent active={2}/>
        <ReturnStepperComponent step={2} onClick={() => {navigate('/plans')}}/>
        <div className='summary'>
            <div className='summary__container'>
            <p className='summary__title'>Resumen del seguro</p>
            <div className='card'>
                <div className='card__summary'>
                    <div className='card__summary__header'>
                        <p className='card__summary__title'>PRECIOS CALCULADOS PARA:</p>
                        <div className='card__summary__user'>
                            <PeopleIconComponent/>
                            <p className='card__summary__user__name'>{userInfo.personal?.name} {userInfo.personal?.lastName}</p>
                        </div>
                    </div>
                    <div className='card__summary__body'>
                        <div className='card__summary__section'>
                            <p className='card__summary__section__title'>Responsable de pago</p>
                            <p className='card__summary__section__content'>{userInfo.contact?.documentType}: {userInfo.contact?.document}</p>
                            <p className='card__summary__section__content'>Celular: {userInfo.contact?.cellphone}</p>
                        </div>
                        <div className='card__summary__section'>
                            <p className='card__summary__section__title'>Plan elegido</p>
                            <p className='card__summary__section__content'>Plan: {userInfo.plan?.name}</p>
                            <p className='card__summary__section__content'>Costo del Plan: ${userInfo.plan?.price.toFixed(2)} al mes</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SummaryPage