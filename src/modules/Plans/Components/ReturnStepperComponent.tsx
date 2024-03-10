import { ArrowBackIconComponent } from '../../Core/Components/Icons'

export interface ReturnStepperComponent{
    step:number;
    onClick?:React.MouseEventHandler<HTMLDivElement>
}

const ReturnStepperComponent = ({step,onClick}:ReturnStepperComponent) => {
  return (
    <div className='return_stepper'>
        <div onClick={onClick} className='return_stepper__back'>
            <ArrowBackIconComponent/>
            <p className='return_stepper__title'>Volver</p>
        </div>
        <p className='return_stepper__step'>PASO {step} DE 2</p>
        <div className='return_stepper__bar return_stepper__bar--background'>
            <div className={`${step === 1 ? 'return_stepper__bar return_stepper__bar--progress' : 'return_stepper__bar return_stepper__bar--full'} `}></div>
            
        </div>
    </div>
  )
}

export default ReturnStepperComponent