import React, {Component} from 'react';
import FeaturesList from './FeaturesList'
import FeaturesData from './FeaturesData'

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
