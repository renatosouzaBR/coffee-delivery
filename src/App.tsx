import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from '@/Router'
import { DefaultTheme } from './styles/DefaultTheme'
import { GlobalStyle } from './styles/GlobalStyle'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
