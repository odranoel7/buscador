import {FiSearch} from 'react-icons/fi';
import './style.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">
        Buscador cep
      </h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu cep..."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color='#FFF'/>
        </button>
      </div>

      <main className='main'>
        <h2>
          CEP: 86708180
        </h2>

        <span>Rua Ipequi</span>
        <span>Complemento: Casa</span>
        <span>Jardim Eldolrado</span>
        <span>Arapongas - PR</span>
      </main>

    </div>
  );
}

export default App;