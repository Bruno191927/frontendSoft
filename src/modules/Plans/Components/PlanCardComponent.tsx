import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../Core/Components/Buttons/ButtonComponent";
import { PlanDto } from "../Interface/PlanDto"

export interface PlanCardComponentProp {
    plan: PlanDto;
    applyDiscount: boolean;
    icon:JSX.Element
}

const PlanCardComponent = ({ plan, applyDiscount,icon }: PlanCardComponentProp) => {
    const navigate = useNavigate();
    return (
        <div className='card'>
            <div className="card__plan__container">
                <div className="card__plan__header">
                    <div className="card__plan__header_info">
                        <h2 className="card__plan__header__title">{plan.name}</h2>
                        <p className="card__plan__header__description">COSTO DEL PLAN</p>
                        {applyDiscount && <p className="card__plan__header__discount">${plan.price} antes</p>}
                        <p className="card__plan__header__price">${plan.price} al mes</p>
                    </div>
                    <div className="card__plan__header_logo">
                    {icon}
                    </div>
                </div>
                <div className="card__plan__body">
                    {plan.description.map((description) => (<p className="card__plan__body__description">{description}</p>))}
                </div>
                <div>
                    <ButtonComponent name="Seleccionar Plan" type="plan" onClick={(e) => {
                        console.log(e);
                        navigate('/summary')
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default PlanCardComponent