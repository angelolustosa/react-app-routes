import { MenuBar } from './components/MenuBar'
import './App.css'

function App() {
  console.log('window', window.location.pathname);
  return (
    <>
      <MenuBar />
    </>
  )
}

export default App
