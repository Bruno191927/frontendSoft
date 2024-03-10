import { LineIconComponent } from '../../Core/Components/Icons'

interface StepperComponentProp {
  active: number;
}

const StepperComponent = ({ active = 1 }: StepperComponentProp) => {
  return (
    <div className='stepper'>
      <div className='stepper__item'><span className={`stepper__circle ${active=== 1 ? 'stepper__circle--active' : 'stepper__circle--disabled'}`}>1</span><p className={`stepper__text ${active === 1 ? 'stepper__text--active' : 'stepper__text--disabled'} `}> Planes y coberturas</p></div>
      <LineIconComponent />
      <div className='stepper__item'><span className={`stepper__circle ${active=== 2 ? 'stepper__circle--active' : 'stepper__circle--disabled'}`}>2</span><p className={`stepper__text ${active === 2 ? 'stepper__text--active' : 'stepper__text--disabled'} `}> Resumen</p></div>
    </div>
  )
}

export default StepperComponent