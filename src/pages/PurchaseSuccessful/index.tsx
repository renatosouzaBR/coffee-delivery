import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import deliveryImage from '@/assets/delivery.svg'
import { PaymentDetailsContainer, PurchaseSuccessfulContainer } from './styles'

export function PurchaseSuccessful() {
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
              Entrega em Rua João Daniel Martinelli, 102
              <span>Farrapos - Porto Alegre, RS</span>
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
              <span>Cartão de Crédito</span>
            </span>
          </div>
        </PaymentDetailsContainer>

        <img src={deliveryImage} alt="" />
      </div>
    </PurchaseSuccessfulContainer>
  )
}
