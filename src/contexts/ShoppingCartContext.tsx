import { createContext, ReactNode, useContext, useReducer } from 'react'

import { Coffee } from '@/pages/Home/components/CoffeeCard'

import { SelectedCoffee, shoppingCartReducer } from './ShoppingCartReducer'
import { ACTIONS_TYPE } from './ActionsTypes'

interface ShoppingCartContextProps {
  selectedCoffees: SelectedCoffee[]
  addCoffeeToShoppingCart(coffee: Coffee, quantity: number): void
  removeCoffeeFromShoppingCart(id: string): void
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

interface ShoppingCartProviderProps {
  children: ReactNode
}

function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [shoppingCartState, dispatch] = useReducer(shoppingCartReducer, {
    selectedCoffees: [],
  })

  const { selectedCoffees } = shoppingCartState

  function addCoffeeToShoppingCart(coffee: Coffee, quantity: number) {
    dispatch({
      type: ACTIONS_TYPE.ADD_COFFEE_IN_SHOPPING_CART,
      payload: {
        ...coffee,
        quantity,
      },
    })
  }

  function removeCoffeeFromShoppingCart(id: string) {
    dispatch({
      type: ACTIONS_TYPE.REMOVE_COFFEE_FROM_SHOPPING_CART,
      payload: {
        id,
      },
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        selectedCoffees,
        addCoffeeToShoppingCart,
        removeCoffeeFromShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

function useShoppingCart() {
  const context = useContext(ShoppingCartContext)
  return context
}

export { ShoppingCartProvider, useShoppingCart }
