import "./App.css";
import Album from "./components/Album/Album.jsx";
import coverJungle from "/for-ever.jpg";
import Practice from "./components/Practice/Practice.jsx";

function App() {
  return (
    <>
      <div>
        <Album
          cover={coverJungle}
          song="Casio"
          artist="Jungle"
          year="2018"
          genre="Nu disco"
        />
        <br />
        {/* <Practice /> */}
      </div>
    </>
  );
}

export default App;
