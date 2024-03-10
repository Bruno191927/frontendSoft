import { PeopleIconComponent } from '../../Core/Components/Icons'
import NavbarComponent from '../../Core/Components/Navbar/NavbarComponent'
import StepperComponent from '../Components/StepperComponent'

const SummaryPage = () => {
  return (
    <div>
        <NavbarComponent/>
        <StepperComponent active={2}/>
        <div className='summary'>
            <div className='summary__container'>
            <p className='summary__title'>Resumen del seguro</p>
            <div className='card'>
                <div className='card__summary'>
                    <div className='card__summary__header'>
                        <p className='card__summary__title'>PRECIOS CALCULADOS PARA:</p>
                        <div className='card__summary__user'>
                            <PeopleIconComponent/>
                            <p className='card__summary__user__name'>Rocio Miranda Díaz</p>
                        </div>
                    </div>
                    <div className='card__summary__body'>
                        <div className='card__summary__section'>
                            <p className='card__summary__section__title'>Responsable de pago</p>
                            <p className='card__summary__section__content'>DNI:</p>
                            <p className='card__summary__section__content'>Celular:</p>
                        </div>
                        <div className='card__summary__section'>
                            <p className='card__summary__section__title'>Plan elegido</p>
                            <p className='card__summary__section__content'>Plan en Casa y Clinica</p>
                            <p className='card__summary__section__content'>Costo del Plan: $99 al mes</p>
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