import {GlobalActions} from '../Actions/globalActions'


export default (state = {view:'Load'}, action) => {

    
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
            return {
                ...state,
                result:action.payload,
                view: "List"
            }



            default:
                return state

    }
}