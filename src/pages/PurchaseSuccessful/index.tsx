import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import deliveryImage from '@/assets/delivery.svg'
import { PaymentDetailsContainer, PurchaseSuccessfulContainer } from './styles'
import { useLocation } from 'react-router-dom'

export function PurchaseSuccessful() {
  const { state } = useLocation()

  console.log(state)

  return (
    <PurchaseSuccessfulContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <span>Agora é só aguardar que logo o café chegará até você</span>

      <div>
        <PaymentDetailsContainer>
          <div>
            <div>
              <MapPin size={16} weight="fill" />
            </div>

            <span>
              Entrega em {state.address.street}, {state.address.streetNumber}
              <span>
                {state.address.neighborhood} - {state.address.city},{' '}
                {state.address.state}
              </span>
            </span>
          </div>

          <div>
            <div>
              <Timer size={16} />
            </div>

            <span>
              Previsão de entrega
              <span>20 min - 30 min</span>
            </span>
          </div>

          <div>
            <div>
              <CurrencyDollar size={16} />
            </div>

            <span>
              Pagamento na entrega
              <span>{state.paymentType}</span>
            </span>
          </div>
        </PaymentDetailsContainer>

        <img src={deliveryImage} alt="" />
      </div>
    </PurchaseSuccessfulContainer>
  )
}
