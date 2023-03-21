import { forwardRef, HTMLAttributes } from 'react'

import { InputContainer, InputField } from './styles'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  optional?: boolean
  maxWidth?: number
  errorMessage?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { errorMessage, maxWidth = 0, optional, ...rest } = props

  return (
    <InputContainer maxWidth={maxWidth}>
      <div>
        <InputField ref={ref} {...rest} />
        {!!optional && <span>Opcional</span>}
      </div>

      {errorMessage && <span>* {errorMessage}</span>}
    </InputContainer>
  )
})
