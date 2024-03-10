import { LogoIconComponent, TelephoneSolidComponent } from "../Icons"

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <LogoIconComponent/>
      <div className="navbar__contact">
        <p className="navbar__contact--label">¡Compra por este medio!</p>
        <div className="navbar__contact__link">
          <TelephoneSolidComponent/>
          <a href="tel:+0114116001" className="navbar__contact__link--content">(01) 411 6001</a>
        </div>
      </div>
    </nav>
  )
}

export default NavbarComponent