
import React, { Component,useState} from 'react';
import { ReactReduxContext, Provider,connect } from 'react-redux';
import {alertMessage,sagaStart} from '../Actions/globalActions'
import { Stage, Layer, Rect, Text, Group } from 'react-konva';
import Btn from '../Components/remoteButtonComponent'



function App(props)
{

  var rects = props.rectList.map((val, idx) => { return (
    <Btn
      key={idx}
      x={val.x} y={val.y} width={val.width} height={val.height} title={val.title} textSize={val.textSize} />)
    
  });


  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
      
      <div className="App">

        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Provider store={store}>
            <Layer>
              <Text text={props.remoteName} />
              {rects}
            </Layer>
          </Provider>
        </Stage>
      </div>)
    
    }
   
    </ReactReduxContext.Consumer>
  );
}
//THIS FUNCTION MAPS STORE TO STATE
const mapState = state => ({
result: state.globalReducer.result,
rectList: state.globalReducer.rectList
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



