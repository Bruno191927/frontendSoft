
import { useState } from "react"
import { ForMeIconComponent, ForOthersIconComponent, PlanCardHomeIconComponent, PlanCardHospitalIconComponent } from "../../Core/Components/Icons"
import NavbarComponent from "../../Core/Components/Navbar/NavbarComponent"
import PlanCardComponent, { PlanCardComponentProp } from "../Components/PlanCardComponent"
import QuoteCardComponent from "../Components/QuoteCardComponent"
import StepperComponent from "../Components/StepperComponent"

const PlanPage = () => {
  const [quoteSelect, setQuoteSelect] = useState<number>(0);
  const planes:PlanCardComponentProp[] = [
    {
      applyDiscount:false,
      plan:{
        "name": "Plan en Casa",
        "price": 39,
        "description": [
          "Médico general a domicilio por S/20 y medicinas cubiertas al 100%.",
          "Videoconsulta y orientación telefónica  al 100% en medicina general + pediatría.",
          "Indemnización de S/300 en caso de hospitalización por más de un día."
        ],
        "age": 60
      },
      icon:<PlanCardHomeIconComponent/>
    },
    {
      applyDiscount:false,
      plan:{
        "name": "Plan en Casa",
        "price": 39,
        "description": [
          "Médico general a domicilio por S/20 y medicinas cubiertas al 100%.",
          "Videoconsulta y orientación telefónica  al 100% en medicina general + pediatría.",
          "Indemnización de S/300 en caso de hospitalización por más de un día."
        ],
        "age": 60
      },
      icon:<PlanCardHospitalIconComponent/>
    },
    {
      applyDiscount:false,
      plan:{
        "name": "Plan en Casa",
        "price": 39,
        "description": [
          "Médico general a domicilio por S/20 y medicinas cubiertas al 100%.",
          "Videoconsulta y orientación telefónica  al 100% en medicina general + pediatría.",
          "Indemnización de S/300 en caso de hospitalización por más de un día."
        ],
        "age": 60
      },
      icon:<PlanCardHomeIconComponent/>
    },
  ]
  return (
    <div className="plan">
      <NavbarComponent/>
      <StepperComponent active={1}/>
      <div className="plan__container">
        <div className="plan__select">
          <p className="plan__title">Rocío ¿Para quién deseas cotizar?</p>
          <p className="plan__description">Selecciona la opción que se ajuste más a tus necesidades.</p>
          <div className="plan__quote">
            <QuoteCardComponent description="Cotiza tu seguro de salud y agrega familiares si así lo deseas." selected={quoteSelect === 1} title="Para mi" onClick={(e) => {console.log(e);setQuoteSelect(1);}} icon={<ForMeIconComponent/>}/>
            <QuoteCardComponent description="Realiza una cotización para uno de tus familiares o cualquier persona." selected={quoteSelect === 2} title="Para alguien más" onClick={(e) => {console.log(e);setQuoteSelect(2);}} icon={<ForOthersIconComponent/>}/>
          </div>
        </div>
      </div>
      <div className="plan__frame">
        <div className="plan__frame__container">
          {
            planes.map((plan) => <PlanCardComponent plan={plan.plan} applyDiscount={plan.applyDiscount} icon={plan.icon}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default PlanPage