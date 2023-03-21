import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import { Input } from '../Input'
import { AddressFormContainer } from './styles'

export function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <AddressFormContainer>
      <header>
        <MapPinLine size={22} />

        <div>
          <span>Endereço de entrega</span>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </header>

      <div>
        <div>
          <Input
            placeholder="CEP"
            maxWidth={200}
            errorMessage={errors.postalCode?.message?.toString()}
            {...register('postalCode')}
          />
        </div>

        <div>
          <Input
            placeholder="Rua"
            errorMessage={errors.street?.message?.toString()}
            {...register('street')}
          />
        </div>

        <div>
          <Input
            placeholder="Número"
            maxWidth={200}
            errorMessage={errors.streetNumber?.message?.toString()}
            {...register('streetNumber', { valueAsNumber: true })}
          />
          <Input placeholder="Complemento" optional {...register('comp')} />
        </div>

        <div>
          <Input
            placeholder="Bairro"
            maxWidth={200}
            errorMessage={errors.neighborhood?.message?.toString()}
            {...register('neighborhood')}
          />
          <Input
            placeholder="Cidade"
            errorMessage={errors.city?.message?.toString()}
            {...register('city')}
          />
          <Input
            placeholder="UF"
            maxWidth={60}
            errorMessage={errors.state?.message?.toString()}
            {...register('state')}
          />
        </div>
      </div>
    </AddressFormContainer>
  )
}
