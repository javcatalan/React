import './App.css';
import Testimonio from './componentes/Testimonios.js'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros usuarios</h1>
        <Testimonio 
          nombre='Ema'
          pais='Suecia'
          imagen='Ema'
          cargo='ingeniera'
          empresa='SPOTIFI'
          testimonio='safjldñ kldsj flsdkfj' />
        <Testimonio 
            nombre='Shawn'
            pais='Singapur'
            imagen='shon'
            cargo='ingeniero'
            empresa='google'
            testimonio='saf dasdf jldñ kldsj flsdkfj' />
        <Testimonio 
            nombre='Sarah'
            pais='nigeria'
            imagen='sarah'
            cargo='developer'
            empresa='chat desk'
            testimonio='saf dfasf asdf jldñ kldsj flsdkfj' />
      </div>  
    </div>
  );
}

export default App;
