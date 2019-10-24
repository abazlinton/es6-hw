import React, {Component} from 'react';
const FeaturesList = require('./FeaturesList')
const FeaturesData = require('./FeaturesData')

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      features: []
    }
  }

  componentDidMount(){
    this.setState({features: FeaturesData})
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