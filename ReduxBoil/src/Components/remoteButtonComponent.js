
import React, { Component, useState, useEffect } from 'react';
import { ReactReduxContext, Provider, connect } from 'react-redux';
 import { alertMessage, sagaStart } from '../Actions/globalActions'
import { Stage, Layer, Rect, Text, Group } from 'react-konva';
import Konva from 'konva';

//This is the component!


function Btn(props) {
    const [color, setColor] = useState('red');
    const [btnTime, setBtnTime] = useState(0)

    function handleClick() {
       setColor('Green');
    };
    function handleClickUp()
    {
        setColor('Red');
    }
 

    return (
        <Group>
            <Rect x={props.x} y={props.y} width={props.width} height={props.height} fill="black"></Rect>

            <Rect x={props.x + 2} y={props.y + 2} width={props.width - 4} height={props.height - 4} fill={color} ></Rect>
            <Text align={'center'} verticalAlign={'middle'} width={props.width} height={props.height} fontSize={props.textSize} text={props.title} x={props.x + 4} y={props.y + 4} onMouseDown={() => handleClick()} onMouseUp={() => handleClickUp()}></Text>
        </Group> 
    );
}

//THIS FUNCTION MAPS STORE TO STATE
const mapState = state => ({
    result: state.globalReducer.result,
});


//THIS FUNCTION IS USED TO MAP ACTIONS TO FUNCTIONS
const mapDispatch = dispatch => ({
    alertMessage: (val) => dispatch(alertMessage(val)),
    sagaStart: (id) => dispatch(sagaStart(id))

});

export default connect(
    mapState,
    mapDispatch
)(Btn);



