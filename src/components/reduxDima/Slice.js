const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";
const AUTH = "AUTH";
// const CARS = "CARS"

const defaultState = {
    currentUser:{},
    // cars:[],
    isAuth: false,
};

export default function userReducer(state = defaultState,action) {
    switch(action.type) {
       case AUTH:
        return{
            ...state,
            isAuth:true,
        }
        case SET_USER:
            return {
                ...state,
                currentUser:action.payload,
             
            }
        case LOGOUT:
            return {
                ...state,
                currentUser:{},
                isAuth:false,
                cars:[]
            }
        // case CARS:

            
        //     return Object.assign({},state,{
        //         cars:{
        //             ...state,
        //             cars: action.payload,
                
        //         }
        //     })
        

        default:
            return state
    }
}
//  export const Carse = cars=>({type:CARS, payload:cars})
 export const Auth = ()=>({type:AUTH});
 export const setUser = user => ({type: SET_USER, payload:user});
 export const logout = () => ({type: LOGOUT});