                                                import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import { router } from './routes/router.tsx'
import { store } from './redux/store.ts'
import { ThemeProvider } from './providers/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <Provider store={store}>
    <RouterProvider router ={router}>
</RouterProvider>
</Provider>
</ThemeProvider>
  </StrictMode>,
)
