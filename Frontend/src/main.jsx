import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouter } from './AppRouter'
import { ContextProvider } from './Context/ContextProvides'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <AppRouter />
  </ContextProvider>
)
