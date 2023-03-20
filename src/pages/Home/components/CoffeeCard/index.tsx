import { ShoppingCart } from 'phosphor-react'

import { CounterInput } from '@/components/CounterInput'
import { formatCurrency } from '@/utils/formatters'
import * as imagesSvg from '@/assets/coffees'

import {
  CoffeeCardContainer,
  CoffeeDescriptions,
  CoffeeImageContainer,
} from './styles'
import { useState } from 'react'

export type Coffee = {
  id: string
  title: string
  subtitle: string
  features: string[]
  image: string
  price: number
}

interface CoffeeCardProps {
  data: Coffee
  onAddToShoppingCart: (coffee: Coffee, quantity: number) => void
}

export function CoffeeCard({ data, onAddToShoppingCart }: CoffeeCardProps) {
  const { title, subtitle, features, price, image } = data
  const imageIndex = Object.keys(imagesSvg).indexOf(image)
  const imageSvg = Object.values(imagesSvg)[imageIndex]
  const formattedCurrencyToPtBR = formatCurrency(price)

  const [counterOfCoffee, setCounterOfCoffee] = useState(1)

  function onChangeCounterCoffee(value: number) {
    setCounterOfCoffee(value)
  }

  function handleAddToShoppingCart() {
    onAddToShoppingCart(data, counterOfCoffee)
  }

  return (
    <CoffeeCardContainer>
      <CoffeeImageContainer>
        <img src={imageSvg.default} alt="" />

        <div>
          {features.map((feat) => (
            <span key={feat}>{feat}</span>
          ))}
        </div>
      </CoffeeImageContainer>

      <CoffeeDescriptions>
        <h4>{title}</h4>
        <span>{subtitle}</span>
      </CoffeeDescriptions>

      <footer>
        <strong>{formattedCurrencyToPtBR}</strong>
        <CounterInput
          value={counterOfCoffee}
          onChangeValue={onChangeCounterCoffee}
        />

        <button onClick={handleAddToShoppingCart}>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </footer>
    </CoffeeCardContainer>
  )
}
