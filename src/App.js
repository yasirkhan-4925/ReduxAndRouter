import React from "react";
import Navbar from "./Components/Navbar";
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { BrowserRouter, Route ,Switch} from "react-router-dom";
import Post from './Components/Post'

class App extends React.Component {
  render() {
    return (
      
      <BrowserRouter>
      <>
       
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/About" component={About}/>
        <Route path="/:post_id" component={Post}/>
        </Switch>
        </>
        
        
      </BrowserRouter>
    );
  }
}

export default App;
