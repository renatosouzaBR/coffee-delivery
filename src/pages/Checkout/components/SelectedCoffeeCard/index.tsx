import { Trash } from 'phosphor-react'

import * as imagesSvg from '@/assets/coffees'
import { CounterInput } from '@/components/CounterInput'
import { SelectedCoffee } from '@/contexts/ShoppingCartReducer'
import { useShoppingCart } from '@/contexts/ShoppingCartContext'
import { formatCurrency } from '@/utils/formatters'

import { SelectedCoffeeCardContainer } from './styles'

interface SelectedCoffeeCardProps {
  data: SelectedCoffee
}

export function SelectedCoffeeCard({ data }: SelectedCoffeeCardProps) {
  const { image, price, title, quantity } = data
  const imageIndex = Object.keys(imagesSvg).indexOf(image)
  const imageSvg = Object.values(imagesSvg)[imageIndex]
  const formattedAmount = formatCurrency(price * quantity)

  const { addCoffeeToShoppingCart, removeCoffeeFromShoppingCart } =
    useShoppingCart()

  function handleChangeCoffeeQuantity(newQuantity: number) {
    addCoffeeToShoppingCart(data, newQuantity)
  }

  function handleRemoveCoffeeFromSelected() {
    removeCoffeeFromShoppingCart(data.id)
  }

  return (
    <SelectedCoffeeCardContainer>
      <img src={imageSvg.default} alt="" />

      <div>
        <span>{title}</span>

        <div>
          <CounterInput
            value={quantity}
            onChangeValue={handleChangeCoffeeQuantity}
          />

          <button onClick={handleRemoveCoffeeFromSelected}>
            <Trash size={16} />
            Remover
          </button>
        </div>
      </div>

      <strong>R$ {formattedAmount}</strong>
    </SelectedCoffeeCardContainer>
  )
}
