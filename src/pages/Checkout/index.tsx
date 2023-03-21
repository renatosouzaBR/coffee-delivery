import { useState } from 'react'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { useShoppingCart } from '@/contexts/ShoppingCartContext'

import { SelectedCoffees } from './components/SelectedCoffees'
import { AddressForm } from './components/AddressForm'
import {
  AddressAndPaymentContainer,
  CheckoutContainer,
  PaymentContainer,
  PaymentSelectButton,
} from './styles'

const formSchema = zod.object({
  postalCode: zod.string().min(8, 'Informe os 8 digitos do CEP'),
  street: zod.string().min(5, 'Informe o nome da rua'),
  streetNumber: zod.number().min(1, 'Informe o número'),
  comp: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(3, 'Informe a cidade'),
  state: zod.string().min(2, 'Informe o estado'),
})

type FormTypes = zod.infer<typeof formSchema>

export function Checkout() {
  const navigate = useNavigate()
  const { selectedCoffees } = useShoppingCart()
  const [paymentType, setPaymentType] = useState('Cartão de Crédito')
  const formShippingCart = useForm<FormTypes>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      streetNumber: 0,
    },
  })

  const { handleSubmit } = formShippingCart

  function handleSelectPaymentType(type: string) {
    setPaymentType(type)
  }

  function handleSubmitShippingForm(data: any) {
    navigate('/purchase-successful', {
      state: {
        address: data,
        paymentType,
      },
    })
  }

  return (
    <CheckoutContainer
      action="submit"
      onSubmit={handleSubmit(handleSubmitShippingForm)}
    >
      {selectedCoffees.length > 0 && (
        <AddressAndPaymentContainer>
          <header>
            <strong>Complete seu pedido</strong>
          </header>

          <FormProvider {...formShippingCart}>
            <AddressForm />
          </FormProvider>

          <PaymentContainer>
            <header>
              <CurrencyDollar size={22} />

              <div>
                <span>Pagamento</span>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </header>

            <div>
              <PaymentSelectButton
                selected={paymentType === 'Cartão de Crédito'}
                onClick={() => handleSelectPaymentType('Cartão de Crédito')}
              >
                <CreditCard size={16} />
                Cartão de Crédito
              </PaymentSelectButton>

              <PaymentSelectButton
                selected={paymentType === 'Cartão de Débito'}
                onClick={() => handleSelectPaymentType('Cartão de Débito')}
              >
                <Bank size={16} />
                Cartão de Débito
              </PaymentSelectButton>

              <PaymentSelectButton
                selected={paymentType === 'Dinheiro'}
                onClick={() => handleSelectPaymentType('Dinheiro')}
              >
                <Money size={16} />
                Dinheiro
              </PaymentSelectButton>
            </div>
          </PaymentContainer>
        </AddressAndPaymentContainer>
      )}

      <SelectedCoffees />
    </CheckoutContainer>
  )
}
