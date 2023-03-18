import { MapPin, ShoppingCart } from 'phosphor-react'

import logoImage from '@/assets/logo.svg'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImage} alt="" />

      <div>
        <span>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </span>

        <button>
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </button>
      </div>
    </HeaderContainer>
  )
}
