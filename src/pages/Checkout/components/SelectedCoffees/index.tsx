import { useShoppingCart } from '@/contexts/ShoppingCartContext'

import { SelectedCoffeesContainer, SummaryOfValues } from './styles'
import { SelectedCoffeeCard } from '../SelectedCoffeeCard'
import { formatCurrency } from '@/utils/formatters'

export function SelectedCoffees() {
  const { selectedCoffees } = useShoppingCart()
  const selectedCoffeesAmount = selectedCoffees.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.price,
    0,
  )
  const formattedSelectedCoffeesAmount = formatCurrency(selectedCoffeesAmount)
  const formattedTotalAmount = formatCurrency(selectedCoffeesAmount + 0)
  const isAvailableToFinishPurchase = selectedCoffees.length > 0

  return (
    <SelectedCoffeesContainer>
      <header>
        <strong>Cafés selecionados</strong>
      </header>

      <div>
        {selectedCoffees.length <= 0 && (
          <strong>Não há cafés adicionados</strong>
        )}

        {selectedCoffees.map((coffee) => (
          <SelectedCoffeeCard key={coffee.id} data={coffee} />
        ))}

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
                <td>R$ {formattedSelectedCoffeesAmount}</td>
                <td>R$ 0,00</td>
                <td>R$ {formattedTotalAmount}</td>
              </tr>
            </tbody>
          </table>
        </SummaryOfValues>

        <button type="submit" disabled={!isAvailableToFinishPurchase}>
          Confirmar pedido
        </button>
      </div>
    </SelectedCoffeesContainer>
  )
}
