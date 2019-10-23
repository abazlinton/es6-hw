import React, {Component} from 'react';
import './App.css';
import FeaturesList from './FeaturesList'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      features: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:8080/features')
      .then(res => res.json())
      .then(data => this.setState({ features: data._embedded.features }))
  }

  render(){
    return (
      <div className="App">
        <FeaturesList
          features={this.state.features}
        > 
        </FeaturesList>
      </div>
    );
  } 
}

export default App;
