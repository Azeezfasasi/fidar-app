import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { UserProvider } from './assets/components/context/UserContext.jsx';
import { ThemeProvider } from './assets/components/context/ThemeContext.jsx';
import { MessageProvider } from './assets/components/context/MessageContext.jsx';
MessageProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <MessageProvider>
          <App />
        </MessageProvider>
      </ThemeProvider>
    </UserProvider>
  </StrictMode>,
)
