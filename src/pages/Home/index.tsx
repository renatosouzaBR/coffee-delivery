import coffeeBannerImage from '@/assets/coffee-banner.svg'
import coffeesData from '@/database/coffees.json'

import { Benefits } from './components/Benefits'
import { CoffeesContainer, HomeContainer, WelcomeContainer } from './styles'
import { Coffee, CoffeeCard } from './components/CoffeeCard'
import { useReducer } from 'react'

type SelectedCoffee = Coffee & {
  quantity: number
}

interface ShoppingCartState {
  selectedCoffees: SelectedCoffee[]
}

enum ACTIONS_TYPE {
  ADD_COFFEE_IN_SHOPPING_CART = 'ADD_COFFEE_IN_SHOPPING_CART',
}

export function Home() {
  const [shoppingCartState, dispatch] = useReducer(shoppingCartReducer, {
    selectedCoffees: [],
  })

  const totalOfSelectedCoffees = shoppingCartState.selectedCoffees.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0,
  )

  function shoppingCartReducer(state: ShoppingCartState, action: any) {
    switch (action.type) {
      case ACTIONS_TYPE.ADD_COFFEE_IN_SHOPPING_CART: {
        const coffeeIndex = state.selectedCoffees.findIndex(
          (coffee) => coffee.id === action.payload.id,
        )

        if (coffeeIndex >= 0) {
          const newSelectedCoffees = state.selectedCoffees.map((coffee) => {
            if (coffee.id === action.payload.id) {
              return {
                ...coffee,
                quantity: action.payload.quantity,
              }
            }

            return coffee
          })

          return {
            ...state,
            selectedCoffees: newSelectedCoffees,
          }
        }

        return {
          ...state,
          selectedCoffees: [...state.selectedCoffees, action.payload],
        }
      }
      default:
        return state
    }
  }

  function handleAddToShoppingCart(coffee: Coffee, quantity: number) {
    dispatch({
      type: ACTIONS_TYPE.ADD_COFFEE_IN_SHOPPING_CART,
      payload: {
        ...coffee,
        quantity,
      },
    })
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
