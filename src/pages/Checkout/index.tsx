import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'

import coffeeImage from '@/assets/coffee-1.svg'
import { CounterInput } from '@/components/CounterInput'

import { Input } from './components/Input'

import {
  AddressAndPaymentContainer,
  AddressContainer,
  CheckoutContainer,
  PaymentContainer,
  PaymentSelectButton,
  SelectedCoffees,
  SummaryOfValues,
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

      <SelectedCoffees>
        <header>
          <strong>Cafés selecionados</strong>
        </header>

        <div>
          {/* Cartão de produto */}
          <div>
            <img src={coffeeImage} alt="" />

            <div>
              <span>Expresso Tradicional</span>

              <div>
                <CounterInput />
                <button>
                  <Trash size={16} />
                  Remover
                </button>
              </div>
            </div>

            <strong>R$ 9,90</strong>
          </div>

          <SummaryOfValues>
            <table>
              <thead>
                <tr>
                  <th>Total de itens</th>
                  <th>Entrega</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>R$ 29,70</td>
                  <td>R$ 3,50</td>
                  <td>R$ 33,20</td>
                </tr>
              </tbody>
            </table>
          </SummaryOfValues>

          <button>Confirmar pedido</button>
        </div>
      </SelectedCoffees>
    </CheckoutContainer>
  )
}
