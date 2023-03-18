import styled, { css } from 'styled-components'

interface InputContainerProps {
  maxWidth: number
}

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  height: 2.625rem;
  padding: 0 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-300']};
  background-color: ${(props) => props.theme['base-200']};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-600']};
    font-style: italic;
  }

  :focus-within {
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-400']};
  }

  ${({ maxWidth }) =>
    !!maxWidth &&
    css`
      max-width: ${maxWidth}px;
    `};
`

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-700']};
  background-color: transparent;
  border: none;

  :focus {
    box-shadow: none;
  }

  ::placeholder {
    color: ${(props) => props.theme['base-600']};
  }
`
