import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from '@/Router'
import { GlobalStyles } from '@/styles/global'
import { DefaultTheme } from '@/styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
