import { HomeContainer, Hero, CoffeeList } from './styles'
import { CoffeCard } from '../../components/CoffeeCard'
import heroImg from '../../assets/hero-img.svg'
import { ShoppingCart, Timer, Coffee, Package } from '@phosphor-icons/react'

export function Home() {
  return (
    <HomeContainer>
      <Hero>
        <div className="heroText">
          <div className="heroTitle">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <div className="heroItems">
            <span>
              <ShoppingCart weight="fill" />
              <p>Compra simples e segura</p>
            </span>
            <span>
              <Package weight="fill" />
              <p>Embalagem mantém o café intacto</p>
            </span>
            <span>
              <Timer weight="fill" />
              <p>Entrega rápida e rastreada</p>
            </span>
            <span>
              <Coffee weight="fill" />
              <p>O café chega fresquinho até você</p>
            </span>
          </div>
        </div>

        <img src={heroImg} alt="" />
      </Hero>
      <CoffeeList>
        <h2>Nosso cafés</h2>
        <div className="list">
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
        </div>
      </CoffeeList>
    </HomeContainer>
  )
}
