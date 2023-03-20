import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  padding: 2.5rem 10rem;

  display: flex;
  gap: 2rem;

  header > strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
  }
`

export const AddressAndPaymentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const AddressContainer = styled.div`
  background-color: ${(props) => props.theme['base-100']};
  border-radius: 6px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  header {
    display: flex;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['yellow-900']};
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 2px;

      span {
        color: ${(props) => props.theme['base-800']};
      }

      span:last-child {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-700']};
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
  }
`

export const PaymentContainer = styled.div`
  background-color: ${(props) => props.theme['base-100']};
  border-radius: 6px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  header {
    display: flex;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['purple-400']};
    }

    & > div {
      display: flex;
      flex-direction: column;
      gap: 2px;

      span {
        color: ${(props) => props.theme['base-800']};
      }

      span:last-child {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-700']};
      }
    }
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

interface PaymentSelectButtonProps {
  selected?: boolean
}

export const PaymentSelectButton = styled.button<PaymentSelectButtonProps>`
  border: none;
  width: 100%;
  max-width: 11rem;
  height: 3.125rem;
  padding: 0 1rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-300']};

  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 0.75rem;
  color: ${(props) => props.theme['base-700']};
  text-transform: uppercase;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme['purple-400']};
  }

  ${({ selected }) =>
    !selected &&
    css`
      :hover {
        background-color: ${(props) => props.theme['base-400']};
        color: ${(props) => props.theme['base-800']};
      }
    `}

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${(props) => props.theme['purple-100']};
      border: 1px solid ${(props) => props.theme['purple-400']};
      color: ${(props) => props.theme['base-700']};
    `}
`
