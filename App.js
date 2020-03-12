import React, {Component}  from 'react';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button'

const famille = {
  membre1: {
    nom:'Cédric',
    age: 26
  },
  membre2: {
    nom:'Camille',
    age: 25
  },
  membre3: {
    nom:'Delphine',
    age: 29
  }
}

class App extends Component {
  
  state = { famille }

  handleClick = () => {
    const famille = { ...this.state.famille }
    famille.membre1.age += 1
    this.setState({ famille })
  }
  
    render () {
      const { titre } = this.props
      const { famille } = this.state
    return (
      <div className="App">
        <h1>{titre}</h1>
      
        <Membre nom={famille.membre1.nom}
            age={famille.membre1.age}
        >
          Je suis en train de <strong>coder</strong> .
        </Membre>
        <Membre nom={famille.membre2.nom}
          age={famille.membre2.age}/>
        <Membre nom={famille.membre3.nom}
        age={famille.membre3.age}>
          Chez google
        </Membre>
        <Button
        ageplus={this.handleClick}/>
      </div>
    )
  }
  
}


export default App;
