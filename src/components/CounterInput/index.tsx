import { Minus, Plus } from 'phosphor-react'

import { CounterInputContainar } from './styles'

export function CounterInput() {
  return (
    <CounterInputContainar>
      <Minus size={14} weight="bold" />
      <span>1</span>
      <Plus size={14} weight="bold" />
    </CounterInputContainar>
  )
}
