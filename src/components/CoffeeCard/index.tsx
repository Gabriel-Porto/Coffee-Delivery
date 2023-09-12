import { CoffeeCardContainer } from './styles'
import Americano from '../../assets/Americano.png'
import { ShoppingCart } from '@phosphor-icons/react'

export function CoffeCard() {
  return (
    <CoffeeCardContainer>
      <img src={Americano} alt="" />
      <div className="tags">
        <span>Tradicional</span>
        <h1>Expresso Tradicional</h1>
        <p>O tradicional café feito com água quente e grãos moídos</p>

        <div className="buy">
          <p>
            R$ <span>9,90</span>
          </p>
          <div className="counter">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button>
            <ShoppingCart />
          </button>
        </div>
      </div>
    </CoffeeCardContainer>
  )
}
