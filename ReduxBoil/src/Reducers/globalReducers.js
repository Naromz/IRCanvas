import {GlobalActions} from '../Actions/globalActions'


export default (state = {view:'Load', rectList: 
[{ title: 'Power', x: 40, y: 40, width: 320, height: 85, color: 'Green', textSize: 24, btnId: "uRFVeSqgVfX3rjEOsk30X" }, 
{ title: 'Vol Up', x: 40, y: 130, width: 155, height: 85, color: 'Green', textSize: 24, btnId: "qYho6orlpx2NSh5OHLkFC" }, 
{ title: 'Vol Down', x: 40, y: 220, width: 155, height: 85, color: 'Green', textSize: 24, btnId: "yGuvfmGkd7DdYrNgNJgL4" }, 
{ title: 'CH Up', x: 205, y: 130, width: 155, height: 85, color: 'Green', textSize: 24, btnId: "NtBeJnfdJvcarPEOQ9QXr" }, 
{ title: 'CH Down', x: 205, y: 220, width: 155, height: 85, color: 'Green', textSize: 24, btnId: "II3xsX5xAiJLmLNV6O1ht" }]

}, action) => {

    
    switch (action.type) 
    {
        case GlobalActions.ALERT_MESSAGE:
            alert(action.payload);
            return {
                ...state
            }

            case GlobalActions.TESTSAGA.START:
            return {
                ...state
            }

            case GlobalActions.TESTSAGA.SUCCESS || GlobalActions.TESTSAGA.FAIL:
            console.log(action.payload);
            alert(JSON.stringify(action.payload));
            return {
                ...state,
                result:action.payload.nodes
            }



            default:
                return state

    }
}