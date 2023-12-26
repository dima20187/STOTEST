import React, { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert } from "react-native";
import { Text, Pressable, Linking, View, Image, TextInput, KeyboardAvoidingView, Platform, Modal, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/customStyles';
import { IMAGES } from '../../../assets/index';
import { useSelector } from 'react-redux';
import { ModalS } from '../ModalS';
import { Auth } from '../reduxDima/Slice';
import { useDispatch } from 'react-redux';

export function EnterSmsScreen({ navigation }) {
  const { SMS_PAGE_PICTURE } = IMAGES;

  const [modal, setModal] = useState(false);
  const [cod,setCod] = useState('')

  const [seconds,setSeconds]=useState(60)


  useEffect(()=>{
   
  const id = setInterval(()=>{
    setSeconds((s)=>s - 1)
   },1000) 
  setTimeout(()=>{
    clearInterval(id)
   },61000)
  },[])



  const isAuth = useSelector(state=>state.user.isAuth)
  const dispatch = useDispatch()


const TelefonPush =  ()=>{
 if(cod === '3511'){
dispatch(Auth())
setTimeout(()=>{
  navigation.navigate("Dashbord")
  },1000)
  
  
 }
}


  const modalfun = () => {
    setModal(!modal);
  };

  return (
    <View style={styles.container}>
      <View>
        {
          modal === true &&
          <ModalS />

        }

      </View>

      {/* <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    > */}
      <Text
        style={styles.header_title}
      >
        Подтвердите номер
      </Text>
      
      <Image style={styles.image_sms} source={SMS_PAGE_PICTURE} />
      <StatusBar style="auto" />
      <View>
       <TextInput
          value={cod}
          onChangeText={setCod}
          placeholder="Код из смс"
          style={styles.test_input}
          keyboardType="number-pad"
        /> 
         
        <Text
          style={styles.text_field_description}
        >
          Вы можете получить новый код из смс через {seconds} сек (3511).
        </Text>
        <Text
       
          style={styles.text_field_description_sms}
        >
          Получить новый код.
        </Text>
      </View>
      <Pressable style={{
        paddingTop: '15%',
      }}
      >
        <Text
          style={styles.enter_btn}
          // onPress={() => navigation.navigate('Dashbord')}
          onPress={TelefonPush}
        >Войти
        </Text>
      </Pressable>
      <Text
        style={styles.privacy_police}
        // onPress={() => Linking.openURL('https://devby.io/pages/agreement')}
        onPress={modalfun}
      >
        Пользовательское соглашение
      </Text>
      {/* </KeyboardAvoidingView> */}
    </View>
  );
}
