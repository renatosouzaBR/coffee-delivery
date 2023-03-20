import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 27.5rem;
    min-width: 22rem;
    padding: 1rem 2.5rem 2.5rem;
    background-color: ${(props) => props.theme['base-100']};

    border-top-left-radius: 6px;
    border-top-right-radius: 44px;
    border-bottom-left-radius: 44px;
    border-bottom-right-radius: 6px;

    & > strong {
      padding: 0.5rem 0;
      text-align: center;
      font-size: 1.25rem;
    }

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

      :disabled {
        opacity: 0.7;
        pointer-events: none;
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
    padding: 1.5rem 0;

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
