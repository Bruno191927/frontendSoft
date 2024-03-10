interface ButtonComponentProp{
    name:string;
    type?: 'home' | 'plan';
    onClick?:React.MouseEventHandler<HTMLButtonElement>;
    buttonType?: 'button' | 'submit' | 'reset';
}

const ButtonComponent = ({name,type= 'home',onClick,buttonType = 'button'}:ButtonComponentProp) => {
  return (
    <button type={buttonType} className={`${type === 'home' ? 'button button--home' : 'button button--plan'} `} onClick={onClick}>
        {name}
    </button>
  )
}

export default ButtonComponent