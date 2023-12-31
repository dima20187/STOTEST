import AsyncStorage from "@react-native-async-storage/async-storage";

const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";
const AUTH = "AUTH";
const CARS = "CARS"

const defaultState = {
    currentUser:{},
    isAuth: false,
    cars:[]
};

export default function userReducer(state = defaultState,action) {
    switch(action.type) {
        case CARS:
        const newItem = {         
                    id: payload,
                    title: payload,
                  }
            return [...state.cars,newItem];
            
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
            AsyncStorage.removeItem('token')
            return {
                ...state,
                currentUser:{},
                isAuth:false,
            }

      default: 
      return state
    }
}
 export const Carse = cars=>({type:CARS, payload:cars})
 export const Auth = ()=>({type:AUTH});
 export const setUser = user => ({type: SET_USER, payload:user});
 export const logout = () => ({type: LOGOUT});