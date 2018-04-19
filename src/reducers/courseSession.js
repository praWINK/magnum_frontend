const INITIAL_STATE = {
    selectedQuiz:{
        data: [],
        error: null,
        loaded: false, 
    }
};
 
 export default function (state = INITIAL_STATE, action) {
     switch (action.type) {
        case 'get_quiz_object':
        return {
            ...state,
            selectedQuiz: {
                data: action.payload,
                error: null,
                loaded: true,
            }
        }
        default:
            return {
                 ...state
        }
     }
 }
 