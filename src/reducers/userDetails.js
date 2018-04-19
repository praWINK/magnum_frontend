const INITIAL_STATE = {
    details:{
        status : false
    }
 };
 
 export default function (state = INITIAL_STATE, action) {
     switch (action.type) {
         case 'update_user_details':
             return {
                 ...state,
                 details: action.payload
            }
        default:
             return {
                 ...state
        }
     }
 }
 