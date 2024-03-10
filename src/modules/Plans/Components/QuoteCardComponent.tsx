import { RadioCheckIconComponent, RadioCheckSelectIconComponent } from "../../Core/Components/Icons";

interface QuoteCardComponentProp {
  title: string;
  description: string;
  selected: boolean;
  icon: JSX.Element;
  onClick?:React.MouseEventHandler<HTMLDivElement>
}

const QuoteCardComponent = ({ title, description, selected, icon,onClick }: QuoteCardComponentProp) => {
  return (
    <div className={`card card--pointer ${selected && 'card--select'}`} onClick={onClick}>
      <div className="card__quote">
        <div className="card__quote__check">
          {selected ? <RadioCheckSelectIconComponent /> : <RadioCheckIconComponent />}
        </div>

        <div className="card__quote__body">
          {icon}
          <p className="card__quote__title">{title}</p>
          <p className="card__quote__description">{description}</p>
        </div>
      </div>

    </div>
  )
}

export default QuoteCardComponent