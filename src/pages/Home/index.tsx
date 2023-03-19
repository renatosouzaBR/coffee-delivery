import coffeeBannerImage from '@/assets/coffee-banner.svg'
import coffeesData from '@/database/coffees.json'

import { Benefits } from './components/Benefits'
import { CoffeesContainer, HomeContainer, WelcomeContainer } from './styles'
import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
  return (
    <HomeContainer>
      <WelcomeContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>

          <div>
            <Benefits title="Compra simples e segura" icon="shoppingCart" />
            <Benefits title="Embalagem mantém o café intacto" icon="package" />
            <Benefits title="Entrega rápida e rastreada" icon="timer" />
            <Benefits title="O café chega fresquinho até você" icon="coffee" />
          </div>
        </div>

        <img src={coffeeBannerImage} alt="" />
      </WelcomeContainer>

      <CoffeesContainer>
        <h2>Nossos cafés</h2>

        <div>
          {coffeesData.map((coffee) => (
            <CoffeeCard key={coffee.id} data={coffee} />
          ))}
        </div>
      </CoffeesContainer>
    </HomeContainer>
  )
}
