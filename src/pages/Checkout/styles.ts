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

export const SelectedCoffees = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div {
    width: 100%;
    max-width: 27.5rem;
    padding: 1rem 2.5rem 2.5rem;
    background-color: ${(props) => props.theme['base-100']};

    border-top-left-radius: 6px;
    border-top-right-radius: 44px;
    border-bottom-left-radius: 44px;
    border-bottom-right-radius: 6px;

    & > button {
      width: 100%;
      height: 2.875rem;
      padding: 0 0.5rem;
      border: none;
      border-radius: 6px;
      background-color: ${(props) => props.theme['yellow-400']};

      font-size: 0.875rem;
      font-weight: 700;
      color: ${(props) => props.theme.white};
      text-transform: uppercase;

      cursor: pointer;

      :hover {
        background-color: ${(props) => props.theme['yellow-900']};
      }
    }

    & > div {
      padding: 1.5rem 0;
      border-bottom: 1px solid ${(props) => props.theme['base-300']};

      display: flex;
      gap: 1.25rem;

      img {
        width: 4rem;
        height: 4rem;
      }

      strong {
        font-weight: 700;
        color: ${(props) => props.theme['base-700']};
        margin-left: 2rem;
      }

      & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span {
          color: ${(props) => props.theme['base-800']};
        }

        div {
          height: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;

          button {
            border: none;
            border-radius: 6px;
            padding: 0 0.5rem;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.25rem;
            background-color: ${(props) => props.theme['base-300']};

            cursor: pointer;

            font-size: 0.75rem;
            text-transform: uppercase;
            color: ${(props) => props.theme['base-700']};

            :hover {
              background-color: ${(props) => props.theme['base-400']};
            }

            svg {
              color: ${(props) => props.theme['purple-400']};
            }
          }
        }
      }
    }
  }
`

export const SummaryOfValues = styled.div`
  table {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    thead tr,
    tbody tr {
      display: inline-flex;
      flex-direction: column;
      line-height: 2rem;
    }

    thead th {
      text-align: left;
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-700']};
    }

    tbody td {
      text-align: right;
      font-size: 1em;
      font-weight: 400;
      color: ${(props) => props.theme['base-700']};
    }

    th,
    tr :last-child {
      font-size: 1.25em;
      font-weight: 700;
      color: ${(props) => props.theme['base-800']};
    }
  }
`
