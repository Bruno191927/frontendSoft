
import { useEffect, useState } from "react"
import { ForMeIconComponent, ForOthersIconComponent, PlanCardHomeIconComponent } from "../../Core/Components/Icons"
import NavbarComponent from "../../Core/Components/Navbar/NavbarComponent"
import PlanCardComponent from "../Components/PlanCardComponent"
import QuoteCardComponent from "../Components/QuoteCardComponent"
import StepperComponent from "../Components/StepperComponent"
import { PlanDto, PlanListDto } from "../Interface/PlanDto"
import { useMutation } from "@tanstack/react-query"
import { getPlans } from "../Services/PlanApi"
import { userStore } from "../../Home/Store/UserStore"

const PlanPage = () => {
  const userInfo = userStore((state) => state.user)
  const [quoteSelect, setQuoteSelect] = useState<number>(0);
  const [applyDiscount,setApplyDiscount] = useState<boolean>(false);
  const [plans,setPlans] = useState<PlanDto[]>([]);

  const getPlanMutation = useMutation({
    mutationFn:getPlans,
    onSuccess: (data:PlanListDto) => {
      setPlans(data.list)
    },
    onError: (error) => {
      console.log(error);
    }
  });

  useEffect(() => {
    getPlanMutation.mutate()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <div className="plan">
      <NavbarComponent/>
      <StepperComponent active={1}/>
      <div className="plan__container">
        <div className="plan__select">
          <p className="plan__title">{userInfo.personal?.name} ¿Para quién deseas cotizar?</p>
          <p className="plan__description">Selecciona la opción que se ajuste más a tus necesidades.</p>
          <div className="plan__quote">
            <QuoteCardComponent description="Cotiza tu seguro de salud y agrega familiares si así lo deseas." selected={quoteSelect === 1} title="Para mi" onClick={() => {setQuoteSelect(1);setApplyDiscount(false)}} icon={<ForMeIconComponent/>}/>
            <QuoteCardComponent description="Realiza una cotización para uno de tus familiares o cualquier persona." selected={quoteSelect === 2} title="Para alguien más" onClick={() => {setQuoteSelect(2);setApplyDiscount(true)}} icon={<ForOthersIconComponent/>}/>
          </div>
        </div>
      </div>
      <div className="plan__frame">
        <div className="plan__frame__container">
          {
            plans.map((plan) => <PlanCardComponent plan={plan} applyDiscount={applyDiscount} icon={<PlanCardHomeIconComponent/>}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default PlanPage