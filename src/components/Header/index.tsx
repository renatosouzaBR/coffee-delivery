import { MapPin, ShoppingCart } from 'phosphor-react'

import logoImage from '@/assets/logo.svg'
import { useShoppingCart } from '@/contexts/ShoppingCartContext'

import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { selectedCoffees } = useShoppingCart()

  const totalOfSelectedCoffees = selectedCoffees.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0,
  )

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoImage} alt="" />
      </NavLink>

      <div>
        <span>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </span>

        <NavLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          <span>{totalOfSelectedCoffees}</span>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
