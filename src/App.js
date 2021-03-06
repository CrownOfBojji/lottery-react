import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {

  state = {
    manager: '',
    players: [],
    balance: '',
    value: '',
    message: 'none'
  };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.showParticipants().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    console.log(manager);

    this.setState({ manager, players, balance});
  }

  clickEnter = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({message: 'waiting on transaction to be completed...'});

    await lottery.methods.enterLottery().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });

    this.setState({message: 'transaction completed'});
  };

  onPickWinner = async () => {
    const accounts = await web3.eth.getAccounts();

    this.setState({message: 'waiting on picking winner...'});

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });

    this.setState({message: 'winner picked !'});
  };

  render() {
    return (
      <div>
        <h2> Lottery Contract </h2>
        <p> this contract is managed by: {this.state.manager} </p>
        <p> Current participants count: {this.state.players.length} </p>
        <p> Current pool: {web3.utils.fromWei(this.state.balance, 'ether')} ether </p>

        <hr />
          <p>Current System message: {this.state.message}</p>
        <hr />

        <form onSubmit={this.clickEnter}>
          <h4> Want to try your luck?</h4>
          <div>
            <label>Amount of ether to enter</label>
            <input
              value={this.state.value}
              onChange={event => this.setState({value: event.target.value})}
            />
          </div>
          <button>Enter</button>
        </form>

        <hr />

        <h4> Pick a winner !</h4>
        <button onClick={this.onPickWinner}> Go</button>

        <hr />


      </div>
    );
  }
}

export default App;
