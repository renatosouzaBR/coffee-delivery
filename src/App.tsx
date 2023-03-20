import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from '@/Router'
import { ShoppingCartProvider } from '@/contexts/ShoppingCartContext'

import { DefaultTheme } from '@/styles/DefaultTheme'
import { GlobalStyle } from '@/styles/GlobalStyle'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <ShoppingCartProvider>
        <GlobalStyle />

        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ShoppingCartProvider>
    </ThemeProvider>
  )
}
