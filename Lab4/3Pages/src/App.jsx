import { useState } from 'react'
import './App.css'
import { EmojiProvider } from './context/emojiContext'
import MyThemeProvider from './context/ThemeContext'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar'
// import './styles/navBar.css'

function App() {

  return (
    <>
      <EmojiProvider>
        <MyThemeProvider>
          <NavBar/>
          <AppRoutes/>
        </MyThemeProvider>
      </EmojiProvider>
    </>
  )
}

export default App
