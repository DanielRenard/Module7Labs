import { useState } from 'react'
import './App.css'
import BitcoinRates from './components/BitcoinRates'
import { EmojiProvider } from './context/emojiContext'

function App() {

  return (
    <>
    <EmojiProvider>
      <BitcoinRates/>
    </EmojiProvider>
    </>
  )
}

export default App
