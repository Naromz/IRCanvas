
import React, { Component,useState, useEffect} from 'react';
import './App.css';
import { connect } from 'react-redux';
import {alertMessage,sagaStart} from './Actions/globalActions'

import RemoteView from './Views/RemoteView'
function App(props)
{ 

  useEffect(() => { if(props.view === "Load") {props.sagaStart()}});
  var curView;
  var remotes; 
  if(props.view !== "Load")
  {
  curView = <RemoteView></RemoteView>;
  }
  else
  {
    curView = <h1>load test</h1>;
  }


  return (
    <div><h1 style={{textAlign:"center"}}>Remote Controller</h1>
    <div style={{backgroundColor:'gray',width:400,height:800,marginLeft:'auto',marginRight:'auto'}}>
    {curView}

    </div>
    </div>
  )
    
    
};
const mapState = state => ({
result: state.globalReducer.result,
rectList: state.globalReducer.rectList,
view: state.globalReducer.view
});


//THIS FUNCTION IS USED TO MAP ACTIONS TO FUNCTIONS
const mapDispatch = dispatch => ({
alertMessage: (val) => dispatch(alertMessage(val)),
sagaStart: ()=> dispatch(sagaStart()),

});

export default connect(
  mapState,
  mapDispatch
)(App);



