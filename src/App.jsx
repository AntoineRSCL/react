import React, {Component, Fragment} from 'react';
import './App.css'
import Membre from './components/Membre'
import Button from './components/Button'

const league = {
  membre1: {
    nom: 'Batman',
    age: 48
  },
  membre2: {
    nom: 'Superman',
    age: 46
  },
  membre3: {
    nom: 'Wonder Woman',
    age: 79
  },
  membre4: {
    nom: 'Catwoman',
    age: 33
  },
  membre5: {
    nom: "Hayao Kawabe",
    age: 25
  }
}

class App extends Component {
  state = { 
    league: league,
    plus : 1
  }

  componentDidMount() {
    console.log("montage chef")
  }

  componentDidUpdate() {
    console.log("je recharge mon composant chef")
  }

  componentWillUnmount() {
    console.log("démontage chef")
  }

  handleClick = (nb) =>{
    const league = {...this.state.league}
    league.membre1.age += nb
    this.setState({league})
  }
  render() { 
    const list = Object.keys(this.state.league).map(
      iteration => {
        return (
          <Membre key={iteration} age={this.state.league[iteration].age} nom={this.state.league[iteration].nom} />
        )
      }
    )
    return (
      <>
        <h1>Bonjour le mondeeeeeeeeeeeeeeeeeeeeeee</h1>
        {list}
        <Button 
          plus={this.state.plus}
          vieilir={()=>this.handleClick(this.state.plus)}
        />
      </>
    );
  }
}
 
export default App;
