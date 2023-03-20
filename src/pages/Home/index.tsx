import coffeeBannerImage from '@/assets/coffee-banner.svg'
import coffeesData from '@/database/coffees.json'
import { useShoppingCart } from '@/contexts/ShoppingCartContext'

import { Benefits } from './components/Benefits'
import { Coffee, CoffeeCard } from './components/CoffeeCard'
import { CoffeesContainer, HomeContainer, WelcomeContainer } from './styles'

export function Home() {
  const { addCoffeeToShoppingCart } = useShoppingCart()

  function handleAddToShoppingCart(coffee: Coffee, quantity: number) {
    addCoffeeToShoppingCart(coffee, quantity)
  }

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
            <CoffeeCard
              key={coffee.id}
              data={coffee}
              onAddToShoppingCart={handleAddToShoppingCart}
            />
          ))}
        </div>
      </CoffeesContainer>
    </HomeContainer>
  )
}
