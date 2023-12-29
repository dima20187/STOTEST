import axios from "axios"
import { Alert } from "react-native";
import { Cars, Carse, setUser } from './../reduxDima/Slice';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const registration =  async (email,name,{navigation})=>{
    try{ 
      const response = await axios.post('http://192.168.0.102:5000/api/auth/registration',{
        email,
        name,
   
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
  
    AsyncStorage.setItem('token', response.data.token)
    dispatch(setUser(response.data.user))
    console.log(response.data.token)
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

export const auth = ()=>{
  return async dispatch=>{
    try{
      const jsonValue = await AsyncStorage.getItem('token');
      const response = await axios.get('http://192.168.0.102:5000/api/auth/auth',
      {headers:{Authorization:`Bearer ${jsonValue}`}}
      )
    dispatch(setUser(response.data.user))
    AsyncStorage.setItem('token',response.data.token)
    }
    catch(e){
        Alert.alert("Внимание! + 1", e.response)
        AsyncStorage.removeItem('token')
    }
  }
}

export const Usecars = async ()=>{
 
    try{
      const jsonValue = await AsyncStorage.getItem('token');
      const response = await axios.get(`http://192.168.0.102:5000/api/auth/cars`,{
        headers:{Authorization:`Bearer ${jsonValue}`}
    }
      )
    console.log(response.data.user);
    }
    catch(e){
        Alert.alert("Внимание! + 1", e.response)
        AsyncStorage.removeItem('token')
    }
  
}

export const User = async ()=>{
 
  try{
  
    const response = await axios.get(`http://192.168.0.102:5000/api/auth/user`
    )
   
    return console.log(response.text())
  }
  catch(e){
      Alert.alert("Внимание! + 1", e.response)
      AsyncStorage.removeItem('token')
  }

}



