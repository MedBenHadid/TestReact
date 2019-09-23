import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from "./Components/Profile";
import Post from "./Components/Post";
import Comment from "./Components/Comment"
import {BrowserRouter, Route,Switch } from 'react-router-dom';
class App extends React.Component  {

 
render(){
  
  return (
    <div className="App">
    <BrowserRouter>

    <Switch>
   <Route exact path="/" component={Profile} />
   <Route  path="/post/:id" component={Post} />
   <Route  path="/comment/:postId" component={Comment} />

   </Switch>
</BrowserRouter>
    </div>
  );
}
}

export default App;
