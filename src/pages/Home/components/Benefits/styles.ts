import styled, { css } from 'styled-components'

interface BenefitsContainerProps {
  icon: 'shoppingCart' | 'package' | 'timer' | 'coffee'
}

export const BenefitsContainer = styled.div<BenefitsContainerProps>`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;

  span {
    flex: 1;
    flex-wrap: wrap;
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-700']};
  }

  div {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme.white};

    ${({ icon }) =>
      icon === 'shoppingCart' &&
      css`
        background-color: ${(props) => props.theme['yellow-900']};
      `}

    ${({ icon }) =>
      icon === 'package' &&
      css`
        background-color: ${(props) => props.theme['base-700']};
      `}

    ${({ icon }) =>
      icon === 'timer' &&
      css`
        background-color: ${(props) => props.theme['yellow-400']};
      `}

    ${({ icon }) =>
      icon === 'coffee' &&
      css`
        background-color: ${(props) => props.theme['purple-400']};
      `}
  }
`
