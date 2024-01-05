import React, { useState,useEffect } from 'react';
import { Text, Pressable, Linking, View, Image, TextInput, Modal, TouchableOpacity, ScrollView, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles/customStyles';
import { IMAGES } from '../../../assets/index';
import { ModalS } from '../ModalS';

import PhoneInput from 'react-native-phone-number-input';
import { registration } from './../users/users';
import { useSelector,useDispatch } from 'react-redux';



const { LOGO } = IMAGES;

export function RegistrationScreen({ navigation }) {
  const [modal, setModal] = useState(false);
  const [telefon,setTelefon] = useState("")
  const [name,setName] = useState("")
 


  const ModalFun = () => {
    setModal(!modal);
  };


  const TelefonPush=()=>{
   registration(telefon.substring(1),name,{navigation})

  
  }
  
  return (
    <View style={styles.container}>
      <View>
        {
          modal === true &&
          <ModalS />
        }
      </View>
      <Text
        style={styles.header_title}
      >
        Добро пожаловать
      </Text>
      <Image style={styles.image} source={LOGO} />
      <StatusBar style="auto" />
      <View style={{marginTop:'7%',padding:10}}>
         <View>
          <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Ваше имя"
          style={styles.name_input}
          keyboardType={'email-address'}
        /> 
        <Text style={styles.text_field_description}>Пожалуйста укажите ваше имя</Text>
        
         </View> 
         <View style={{marginTop: '5%'}} >
       <PhoneInput
        defaultCode='BY'
        value={telefon}
        withShadow
        onChangeFormattedText={setTelefon}
        />
       </View>
        <Text
          style={styles.text_field_description}
        >
          Чтобы пройти регистрацию нам понадобится номер вашего мобильного телефона
        </Text>
      </View>
      <Pressable style={{
        paddingTop: '15%',
      }}
      >
        <Text
          style={styles.enter_btn}

          onPress={TelefonPush}
          
        >Войти
        </Text>
      </Pressable>
      <Text
        style={styles.privacy_police}
        // onPress={() => Linking.openURL('https://devby.io/pages/agreement')}
        onPress={ModalFun}
      >
        Пользовательское соглашение
      </Text>
      <Text style={styles.login} >Уже есть аккаунт? <Text onPress={()=>navigation.navigate("LoginScreen")}  style={{textDecorationLine:'underline'}} >Войти</Text></Text>
    </View>
  );
}
