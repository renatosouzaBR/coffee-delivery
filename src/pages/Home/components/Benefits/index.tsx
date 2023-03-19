import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import { BenefitsContainer } from './styles'

interface BenefitsProps {
  title: string
  icon: 'shoppingCart' | 'package' | 'timer' | 'coffee'
}

const ICONS = {
  shoppingCart: ShoppingCart,
  package: Package,
  timer: Timer,
  coffee: Coffee,
}

export function Benefits({ title, icon }: BenefitsProps) {
  const IconComponent = ICONS[icon]

  return (
    <BenefitsContainer icon={icon}>
      <div>
        <IconComponent size={16} weight="fill" />
      </div>
      <span>{title}</span>
    </BenefitsContainer>
  )
}
