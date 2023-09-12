import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav className="headerButtons">
        <button>
          <MapPin weight="fill" /> Porto Alegre, RS
        </button>
        <button>
          <ShoppingCart weight="fill" />
        </button>
      </nav>
    </HeaderContainer>
  )
}
