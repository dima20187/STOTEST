import React, { useState } from 'react';
import { Text, Pressable, Linking, View, Image, TextInput, Modal, TouchableOpacity, ScrollView, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles/customStyles';
import { IMAGES } from '../../../assets/index';
import { ModalS } from '../ModalS';
import PhoneInput from 'react-native-phone-number-input';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../users/users';

const { LOGO } = IMAGES;

export function LoginScreen({ navigation }) {
  const [modal, setModal] = useState(false);
  const [telefon,setTelefon] = useState("")
  const dispatch = useDispatch()
  const isAuth = useSelector(state=>state.user.isAuth)



  const ModalFun = () => {
    setModal(!modal);
  };



  const TelefonPush=()=>{
    dispatch(login(telefon.substring(1),{navigation}))
    console.log('123')
  };


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
      <View style={{marginTop:'10%'}}>
       <PhoneInput
        defaultCode='BY'
        value={telefon}
        withShadow
        onChangeFormattedText={setTelefon}
        /> 
        <Text
          style={styles.text_field_description}
        >
          Для входа в приложение введите номер вашего мобильного телефона
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
      <Text style={styles.login} >Нет аккаунта? <Text onPress={()=>navigation.navigate("RegistrationScreen")}  style={{textDecorationLine:'underline',marginTop:20}} > Зарегистрироваться</Text></Text>
    </View>
  );
}
