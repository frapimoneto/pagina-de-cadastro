import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'
import logoImg from '../../assets/logoCasaNova.png'

import {cpfMask} from '../../masks'

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');


  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      nome,
      // email,
      // city,
      // uf,
      // whatsapp
    }

    // try{
    //   //const response = await api.post('ongs', data);
    //   alert(`Seu ID de acesso: ${response.data.id}`);
    //   history.push('/');
    // } catch {
    //   alert('Erro no cadastro, tente novamente!')
    // }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
        <h1>Cadastro</h1>
          <p>Faça seu cadastro</p>
          <img src={logoImg} alt="Casa Nova" />
          
          <Link className="back-link" >
          <FiArrowLeft />
            Fazer Login
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />

          <input
            placeholder="Cpf"
            value={cpf}
            onChange={e => setCpf(e.target.value)}
          />

          <input
            type="date"
            placeholder="Data de Nascimento"
            value={nascimento}
            onChange={e => setNascimento(e.target.value)}
          />

          <input
            placeholder="Telefone"
            //type="tel"
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
          />

          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            placeholder="CEP"
            value={cep}
            onChange={e => setCep(e.target.value)}
          />

          <input
            placeholder="Endereco"
            value={endereco}
            onChange={e => setEndereco(e.target.value)}
          />

          <input
            placeholder="Bairro"
            value={bairro}
            onChange={e => setBairro(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={cidade}
              onChange={e => setCidade(e.target.value)}
            />

            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit" >Cadastrar</button>
        </form>

        

      </div>
    </div>
  )
}