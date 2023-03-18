import { HTMLAttributes } from 'react'

import { InputContainer, InputField } from './styles'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  optional?: boolean
  maxWidth?: number
}

export function Input({ optional, maxWidth = 0, ...props }: InputProps) {
  return (
    <InputContainer maxWidth={maxWidth}>
      <InputField {...props} />
      {!!optional && <span>Opcional</span>}
    </InputContainer>
  )
}
