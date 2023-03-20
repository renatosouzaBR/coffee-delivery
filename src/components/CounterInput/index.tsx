import { Minus, Plus } from 'phosphor-react'

import { CounterInputContainar } from './styles'

interface CounterInputProps {
  value: number
  onChangeValue: (value: number) => void
}

export function CounterInput({ value, onChangeValue }: CounterInputProps) {
  function handleDecreaseValue() {
    if (value === 1) return
    onChangeValue(value - 1)
  }

  function handleIncreaseValue() {
    if (value === 5) return
    onChangeValue(value + 1)
  }

  return (
    <CounterInputContainar>
      <Minus size={14} weight="bold" onClick={handleDecreaseValue} />
      <span>{value}</span>
      <Plus size={14} weight="bold" onClick={handleIncreaseValue} />
    </CounterInputContainar>
  )
}
