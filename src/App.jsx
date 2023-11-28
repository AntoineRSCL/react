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
  }
}

class App extends Component {
  state = { 
    league: league,
    plus : 2
   } 

   handleClick = (nb) =>{
    const league = {...this.state.league}
    league.membre1.age += nb
    this.setState({league})
   }
  render() { 
    return (
      <>
        <h1>Bonjour le mondeeeeeeeeeeeeeeeeeeeeeee</h1>
        <h2>Le monde va mal les amis</h2>
        <Membre 
          nom={this.state.league.membre1.nom}
          age={this.state.league.membre1.age}
        />
        <Membre 
          nom={this.state.league.membre2.nom}
          age={this.state.league.membre2.age}
        />
        <Membre 
          nom={this.state.league.membre3.nom}
          age={this.state.league.membre3.age}
        />
        <Membre
          nom={this.state.league.membre4.nom}
          age={this.state.league.membre4.age}
        />
        <Membre
          nom="ANTOINERSCL"
          age="22"
        >
          <span> Je suis décéption </span>
        </Membre>
        
        <Button 
        plus={this.state.plus}
        vieilir={()=>this.handleClick(this.state.plus)}
      />
      </>
    );
  }
}
 
export default App;
