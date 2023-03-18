import styled from 'styled-components'

export const PurchaseSuccessfulContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  padding: 5rem 10rem;

  & > h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-900']};
  }

  & > span {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-800']};
  }

  & > div {
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    padding: 2.5rem 0;

    img {
      flex: 1;
      width: 18.25rem;
    }
  }
`

export const PaymentDetailsContainer = styled.div`
  flex: 1;
  position: relative;
  padding: 2.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  ::before {
    content: '';
    position: absolute;
    inset: 0;

    border-top-left-radius: 6px;
    border-bottom-left-radius: 36px;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 6px;

    border: 1px solid transparent;
    background: linear-gradient(
        to right,
        ${(props) => props.theme['yellow-400']},
        ${(props) => props.theme['purple-400']}
      )
      border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      display: flex;
      flex-direction: column;
      color: ${(props) => props.theme['base-700']};

      span:last-child {
        font-weight: 700;
      }
    }

    svg {
      color: ${(props) => props.theme.white};
    }

    div {
      background-color: ${(props) => props.theme['purple-400']};
      width: 2rem;
      height: 2rem;
      border-radius: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
