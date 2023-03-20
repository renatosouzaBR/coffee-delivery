import { Coffee } from '@/pages/Home/components/CoffeeCard'
import { ACTIONS_TYPE } from './ActionsTypes'

export type SelectedCoffee = Coffee & {
  quantity: number
}

export interface ShoppingCartState {
  selectedCoffees: SelectedCoffee[]
}

export function shoppingCartReducer(state: ShoppingCartState, action: any) {
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
    case ACTIONS_TYPE.REMOVE_COFFEE_FROM_SHOPPING_CART: {
      const selectedCoffeesWithoutRemovedCoffee = state.selectedCoffees.filter(
        (coffee) => coffee.id !== action.payload.id,
      )

      return {
        ...state,
        selectedCoffees: selectedCoffeesWithoutRemovedCoffee,
      }
    }
    default:
      return state
  }
}
