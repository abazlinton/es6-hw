import React, {Component} from 'react';
const FeaturesList = require('./FeaturesList')
const FeatureData = require('./FeatureData')

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      features: []
    }
  }

  componentDidMount(){
    this.setState({features: FeatureData})
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
