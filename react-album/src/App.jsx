import './App.css'
import Album from './components/Album/Album.jsx';
import coverJungle from '/for-ever.jpg';

function App() {
  return (
    <>
    <Album cover={coverJungle} song="Casio" artist="Jungle" year="2018" genre="Nu disco" />
          
    </>
  )
}

export default App
