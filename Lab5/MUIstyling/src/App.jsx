import { useState } from 'react'
import './App.css'
import { EmojiProvider } from './context/emojiContext'

import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar'
import { UserProvider } from './context/userContext'
// import './styles/navBar.css'

function App() {

  return (
    <>
      <EmojiProvider>

          <UserProvider>
            <NavBar/>
            <AppRoutes/>
          </UserProvider>

      </EmojiProvider>
    </>
  )
}

export default App