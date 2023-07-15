import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './style.css';
import api from './services/api';


function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input == '') {
      alert('Preencha com algum cep');
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      // if (response.status == 200) {
        setCep(response.data);
        setInput("");
      // }
    } catch {
      alert('Erro ao buscar o cep')
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">
        Buscador cep
      </h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu cep..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#FFF'/>
        </button>
      </div>

      {/* {Object.keys(cep).lenght > 0 && ( */}
        <main className='main'>
          <h2>
            CEP: {cep.cep}
          </h2>

          <span>Rua: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento} </span>
          <span>Bairro: {cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      {/* )} */}
      

    </div>
  );
}

export default App;