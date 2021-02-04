import { Map, GoogleApiWrapper } from 'google-maps-react'
import React from 'react'
import Homepage from './Homepage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
  
        <Switch>
  
          <Route render={(routeParams) => {return <Homepage {...routeParams} />}} path='/homepage'/>
          {/* <Route component={Login} path='/login' /> */}
        
        </Switch>
  
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
