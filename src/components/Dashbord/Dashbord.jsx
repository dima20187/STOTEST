import React, { useState, useEffect } from 'react';
import { Alert } from "react-native"
import { persistStore } from 'redux-persist';
import { Store } from '../Store/Store';
import { Text, View, Image, TouchableOpacity, TextInput,StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { dashbordStyles } from '../../styles/DashbordScreenStyles';
import { IMAGES } from '../../../assets/index';
import { SwitchSection } from '../SwitchSection/SwitchSection';
import { clientData } from './mockValues';
import { loadSite } from '../../actions/siteActions';
import { Cars, logout } from '../reduxDima/Slice';
import { styles } from '../../styles/customStyles';
import { Usecars, User, auth, userCars,UseStock } from '../users/users';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const { DIAMOND,BLACKDIAMOND } = IMAGES;
const VIP_CLIENT = 'VIP Клиент';
const NOT_VIP = "Клиент"
const USED = 'использовано';

function CouponeItem( ) {

  const [stock,setStock]=useState([])


  useEffect(()=>{
    const UseStock = async ()=>{
      try{
        const jsonValue = await AsyncStorage.getItem('token');
        const response = await axios.get(`http://192.168.0.105:5000/api/auth/stock`,{
          headers:{Authorization:`Bearer ${jsonValue}`}
      }
        )
      const data = response.data.user.stock
      setStock(data)
      console.log(stock);
      }
      catch(e){
  
          Alert.alert("Внимание! + 1", e.response)
         
      }
  }
  UseStock()
  },[])


  const stck = useSelector(state=>state.user)
  



  return (
    <View
      style={{
        marginBottom: 24,
      }}
    >
{stock.map((sto)=>(
      <Text 
        style={{
          fontSize: 24,
          fontWeight: '600',
          backgroundColor: '#F6F6F6',
          borderRadius: 7,
          marginTop: 4,
          marginBottom:10,
          paddingLeft: 10,
          paddingTop: 6,
          paddingBottom: 6,
          textDecorationLine: sto.is? "none" :"line-through",
        }}
      >
      {sto.name}
      </Text>))}
      <Text
        style={{
          marginTop: 7,
          fontSize: 16,
          fontWeight: '400',
          textAlign: 'right',
          color: '#BDBDBD',
        }}
      >
        {/* {couponeUsageStatus ? USED : expirationDate} */}
      </Text>
      <View
        style={{
          marginTop: 8,
          width: '100%',
          backgroundColor: '#E8E8E8',
          height: 1,
        }}
      />
    </View>
  );
}

function Dashbord({ navigation }) {
  const [selectedSection, SetSelectedSection] = useState(true);
  
  const { name, clientStatusVip, clientCoupenes, clientCars } = clientData;

  const dispatch = useDispatch()
  const [stock,setStock]=useState([])
  const [cars,setCars]=useState([])

  const NameUser = useSelector(state=>state.user.currentUser.name)
  const Anonim = useSelector(state=>state.user.currentUser.email)
  const isAuth = useSelector(state=>state.user.isAuth)
  const isVip = useSelector(state=>state.user.currentUser.isVip)
 


  useEffect(()=>{
    const UseStock = async ()=>{
      try{
        const jsonValue = await AsyncStorage.getItem('token');
        const response = await axios.get(`http://192.168.0.105:5000/api/auth/stock`,{
          headers:{Authorization:`Bearer ${jsonValue}`}
      })
      const data = response.data.user.stock
      setStock(data)
      console.log(stock);
      }
      catch(e){
          Alert.alert("Внимание! + 1", e.response) 
      }
    }
    UseStock()
    },[])



useEffect(()=>{
  const Usecars = async ()=>{
    try{
      const jsonValue = await AsyncStorage.getItem('token');
      const response = await axios.get(`http://192.168.0.105:5000/api/auth/cars`,{
        headers:{Authorization:`Bearer ${jsonValue}`}
    })
    const data = response.data.user.cars
    setCars(data)
    }
    catch(e){
        Alert.alert("Внимание! + 1", e.response)   
        }
      }
    Usecars()
    },[])


  useEffect(()=>{
    if(!AsyncStorage.getItem('token')){
      dispatch(logout())
      navigation.navigate("LoginScreen")
        }
      })


  const onClickHandler = () => {
    dispatch(loadSite());
  };
  
  useEffect(()=>{
    dispatch(auth())
    if(!isAuth) {
      dispatch(logout())
      AsyncStorage.removeItem('token')
      }
  },[])

const LogOut= ()=> { 
  dispatch(logout())
  persistStore(Store).purge()
  setTimeout(()=>{
  navigation.navigate("LoginScreen")
  },1000)

}

const  text=()=>{
  Usecars()
}

  return (
    <>
      <View style={{
        backgroundColor: '#5DB075',
        height: '35%',
      }}
      />
        <TouchableOpacity activeOpacity={0.4} style={styles.view_botton_logout} >
          <Text style={styles.button_loguot} onPress={LogOut} >
            Выход
          </Text>
          </TouchableOpacity>
      {/* <Shadow style={styles.shadowProp}> */}
      <View style={{
        width: 150,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 100,
        // borderWidth: 1,
        borderColor: 'black',
        position: 'absolute',
        top: '48%',
        left: '50%',
        // left: 'calc(50% - 150px)',
        transform: [{ translateX: -70 }, { translateY: -200 }],
        zIndex: 1000,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        elevation: 20,
      }}
      >
        <Image style={dashbordStyles.image} source={isVip? DIAMOND : BLACKDIAMOND} />
      </View>
      <View style={dashbordStyles.container}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',

          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: '600',
            }}
          >
             { NameUser ? NameUser : '+' + Anonim} 
          </Text>
          {clientStatusVip && (
            <Text
              style={{
                marginTop: 8,
                fontSize: 16,
                fontWeight: '600',
                color: '#5DB075',
              }}
            >
              {isVip?VIP_CLIENT:NOT_VIP}
            </Text>
          )}
        </View>
        <SwitchSection
          selectedSection={selectedSection}
          SetSelectedSection={SetSelectedSection}
          onClickHandlerDispatch={onClickHandler}
        />
        {selectedSection ? (
        <CouponeItem />
        ) : (

        <View style={{alignContent:'center',justifyContent:'center'}} >
        
             <Text style={{fontSize:30,textAlign:'center'}} >Ваш Автомобиль:</Text>
          
{!cars.length ?  (
      <Text style={{fontSize:25, textAlign:'center',marginTop:'5%'}} >УПС...Какие-то неполадки</Text>
        ):(

          <View >
          {cars.map((car,index)=>(
          <TouchableOpacity key={index} >
        <Text  style={{marginTop: 16,
        verticalAlign:"middle",
        paddingTop:5,
        paddingLeft:10,
        fontWeight: '600',
         textAlign:"left",
          width: '100%',
          height: 50,
          backgroundColor: '#F6F6F6',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: '#E8E8E8',
          fontSize:30,
          marginBottom:10
          }} >{car.post}
          </Text>
      </TouchableOpacity>
))} 
      </View>


         )}
        </View>
        )
        }
      </View>
    </>
  );
}


export default Dashbord;
