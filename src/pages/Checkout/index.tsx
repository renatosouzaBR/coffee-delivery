import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { Input } from './components/Input'
import { SelectedCoffees } from './components/SelectedCoffees'

import {
  AddressAndPaymentContainer,
  AddressContainer,
  CheckoutContainer,
  PaymentContainer,
  PaymentSelectButton,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressAndPaymentContainer>
        <header>
          <strong>Complete seu pedido</strong>
        </header>

        <AddressContainer>
          <header>
            <MapPinLine size={22} />

            <div>
              <span>Endereço de entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </header>

          <form action="submit">
            <Input placeholder="CEP" maxWidth={200} />
            <Input placeholder="Rua" />

            <div>
              <Input placeholder="Número" maxWidth={200} />
              <Input placeholder="Complemento" optional />
            </div>

            <div>
              <Input placeholder="Bairro" maxWidth={200} />
              <Input placeholder="Cidade" />
              <Input placeholder="UF" maxWidth={60} />
            </div>
          </form>
        </AddressContainer>

        <PaymentContainer>
          <header>
            <CurrencyDollar size={22} />

            <div>
              <span>Pagamento</span>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </header>

          <div>
            <PaymentSelectButton>
              <CreditCard size={16} />
              Cartão de Crédito
            </PaymentSelectButton>

            <PaymentSelectButton selected>
              <Bank size={16} />
              Cartão de Débito
            </PaymentSelectButton>

            <PaymentSelectButton>
              <Money size={16} />
              Dinheiro
            </PaymentSelectButton>
          </div>
        </PaymentContainer>
      </AddressAndPaymentContainer>

      <SelectedCoffees />
    </CheckoutContainer>
  )
}
