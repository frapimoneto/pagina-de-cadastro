import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import MaskedInput from 'react-text-mask';

import './styles.css';
import logoImg from '../../assets/logoCasaNova.png';

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: "",
      cpf: "",
      nascimento: "",
      telefone: "",
      email: "",
      cep: "",
      endereco: "",
      bairro: "",
      cidade: "",
      uf: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    let change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }

  handleClear(event) {
    event.preventDefault()
    this.setState({
      nome: "",
      cpf: "",
      nascimento: "",
      telefone: "",
      email: "",
      cep: "",
      endereco: "",
      bairro: "",
      cidade: "",
      uf: ""
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = new FormData();
    data.append("email", this.state.email);

    console.log(JSON.stringify(this.state));
    alert(JSON.stringify(this.state));
  }

  validateForm() {
    return this.state.nome.length > 0 && this.state.cpf.length > 0 &&
      this.state.nascimento.length > 0 && this.state.telefone.length > 0 &&
      this.state.email.length > 0 && this.state.cep.length > 0 &&
      this.state.endereco.length > 0 && this.state.bairro.length > 0 &&
      this.state.cidade.length > 0 && this.state.uf.length > 0;
  }

  render() {
    return (
      <div className="register-container" >
        <div className="content">
          <section>
            <h1>Cadastro</h1>
            <p>Faça seu cadastro e encontre as melhores propriedades pelos menores preços</p>
            <img src={logoImg} alt="Casa Nova" />

            <Link className="back-link" >
              <FiArrowLeft />
            Fazer Login
          </Link>
          </section>

          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Nome"
              name="nome"
              value={this.state.nome}
              onChange={this.handleChange.bind(this)}
            />

            <MaskedInput
              placeholder="Cpf"
              //maxLength='14'
              name="cpf"
              mask={[/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.',
                /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
              guide={true}
              value={this.state.cpf}
              onChange={this.handleChange.bind(this)}
            />

            <MaskedInput
              name="nascimento"
              placeholder="Data de nascimento"
              mask={[/[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
              guide={true}
              value={this.state.nascimento}
              onChange={this.handleChange.bind(this)}
            />

            <MaskedInput
              placeholder="Telefone"
              name="telefone"
              mask={['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/,
                /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              guide={true}
              value={this.state.telefone}
              onChange={this.handleChange.bind(this)}
            />

            <input
              placeholder="Email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
            />

            <MaskedInput
              placeholder="CEP"
              name="cep"
              mask={[/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
              guide={true}
              value={this.state.cep}
              onChange={this.handleChange.bind(this)}
            />

            <input
              placeholder="Endereco"
              name="endereco"
              value={this.state.endereco}
              onChange={this.handleChange.bind(this)}
            />

            <input
              placeholder="Bairro"
              name="bairro"
              value={this.state.bairro}
              onChange={this.handleChange.bind(this)}
            />

            <div className="input-group">
              <input
                placeholder="Cidade"
                name="cidade"
                value={this.state.cidade}
                onChange={this.handleChange.bind(this)}
              />

              <input
                placeholder="UF"
                name="uf"
                style={{ width: 80 }}
                value={this.state.uf}
                onChange={this.handleChange.bind(this)}
              />
            </div>

            <button className="button-clear"
              type="reset"
              onClick={this.handleClear}>
              Limpar
            </button>
            <button
              className="button"
              type="submit"
              onSubmit={this.handleSubmit}
              disabled={!this.validateForm()}>
              Cadastrar
            </button>
          </form>

        </div>
      </div>
    )
  }
}

export default Register