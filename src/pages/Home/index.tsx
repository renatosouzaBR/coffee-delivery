import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import coffeeBannerImage from '@/assets/coffee-banner.svg'
import coffee1Image from '@/assets/coffee-1.svg'
import { CounterInput } from '@/components/CounterInput'

import {
  CoffeeCard,
  CoffeeDescriptions,
  CoffeeImageContainer,
  CoffeesContainer,
  HomeContainer,
  WelcomeContainer,
} from './styles'

const COFFEE_DATA = new Array(14).fill(new Date().getTime())

export function Home() {
  return (
    <HomeContainer>
      <WelcomeContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>

          <div>
            <div>
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </div>

            <div>
              <div>
                <Package size={16} weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div>
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </div>

            <div>
              <div>
                <Coffee size={16} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>

        <img src={coffeeBannerImage} alt="" />
      </WelcomeContainer>

      <CoffeesContainer>
        <h2>Nossos cafés</h2>

        <div>
          {COFFEE_DATA.map((coffee) => (
            <CoffeeCard key={coffee}>
              <CoffeeImageContainer>
                <img src={coffee1Image} alt="" />
                <span>Tradicional</span>
              </CoffeeImageContainer>

              <CoffeeDescriptions>
                <h4>Expresso Tradicional</h4>
                <span>
                  O tradicional café feito com água quente e grãos moídos
                </span>
              </CoffeeDescriptions>

              <footer>
                <strong>9,90</strong>
                <CounterInput />
                <button>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </footer>
            </CoffeeCard>
          ))}
        </div>
      </CoffeesContainer>
    </HomeContainer>
  )
}
