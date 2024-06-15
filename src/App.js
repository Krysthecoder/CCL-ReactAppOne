import './App.css';
import Testimonio from './components/Testimonio'

function App() {
  return (
    <div className="App">

      <div className='contenedor-principal'>

        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          cargo='Ing de Soft'
          empresa='Amazon'
          testimonio= { (`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`)}
          imagen='shawn'
        />
        
        <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          cargo='Ing de Soft'
          empresa='ChatDesk'
          testimonio= { (`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`)}
          imagen='sarah'
        />

        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          cargo='Ing de Soft'
          empresa='Spotify'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
          imagen='emma'
        />

      </div>

    </div>
  );
}

export default App;