import { useState } from 'react'
import './App.css'

function App() {

  const[cep, setCep] = useState('');
  const[endereco, setEndereco] = useState(null);

  const handleBuscaCep = async(event)=>{
    try{
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if(!response.ok){
        throw new error("CEP não encontado")
      }
      setEndereco(await response.json());

    } catch (error){
      console.error(error);
    }

  }

  return (
    <>
      <div className='container'>
        <h1>Busca de Endereço</h1>
        <input type="number"
        placeholder='Digite seu CEP' 
        value={cep}
        onChange={(e) => setCep(e.target.value)}      
         
        /> <br /><br />
        <button onClick={handleBuscaCep}>
          Buscar
        </button><br /><br />
        <div className='endereco'>
          {endereco ?(<>
          <div className='dInfos'>
            <p>Logradouro: {endereco.logradouro}</p>
            <hr className='linha1'/>
            <p>Bairro: {endereco.bairro}</p>
            <hr className='linha2'/>
            <p>Localidade: {endereco.localidade}</p>
            <hr className='linha3'/>
            <p>Estado: {endereco.uf}</p>
            </div>
          </>): null}
        </div>
      </div>
    </>
  )
}

export default App
