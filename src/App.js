import React from 'react' 
import Footer from './components/Footer'
import NoteForm from './components/NoteForm'
import Fridge from './components/Fridge'
import './App.css'

const App = () => (
  <div className='App'>
    <NoteForm />
    <Fridge />
    <Footer />
  </div>
)

export default App