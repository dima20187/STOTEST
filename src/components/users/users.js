import axios from "axios"
import { Alert } from "react-native";
import { Cars, Carse, setUser } from './../reduxDima/Slice';

export const registration =  async (email,name,cars,{navigation})=>{
    try{ 
      const response = await axios.post('http://192.168.0.102:5000/api/auth/registration',{
        email,
        name,
        cars,
    }) 
    Alert.alert("Уведомление", response.data.message)
  
   if(response.status === 200){
    console.log(response.status)
    navigation.navigate("LoginScreen")
   }
    }
    catch(e){
        Alert.alert("Внимание!", e.response.data.message)
       
    }
  }  

export const login = (email,{navigation})=>{
  return async dispatch=>{
    try{
      const response = await axios.post('http://192.168.0.102:5000/api/auth/login',{
        email
    }) 
  
     dispatch(setUser(response.data.user))
    if(response.status ===200){
      
      navigation.navigate("EnterSmsScreen")
    }
    
    Alert.alert("Уведомление","Ваш акаунт  " +  "+ "+ response.data.user.email + ' Найден')
    }
    catch(e){
        Alert.alert("Внимание!", e.response.data.message)
    }
  }
}



// export const userCars = (cars)=>{
//   return async dispatch=>{
//     try{
//       const response = await axios.post('http://192.168.0.102:5000/api/auth/cars',{
//        cars
//     }) 
//     dispatch(Carse(response.data.user.cars))

  
//     Alert.alert(response.data.user.cars + ' Найден')
//     }
//     catch(e){
//         Alert.alert("Внимание!", e.response.data.message)
//     }
//   }
// }

