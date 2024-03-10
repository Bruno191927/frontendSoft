import { LogoIconComponent } from "../Icons"

const FooterComponent = () => {
  return (
    <footer className="footer">
        <LogoIconComponent fill="#fff"/>
        <div className="footer__description">
            <p className="footer__description--white">© 2023 RIMAC Seguros y Reaseguros.</p>
        </div>
    </footer>
  )
}

export default FooterComponent