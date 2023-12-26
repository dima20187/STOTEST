import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: '20%' ,
    textAlign: 'center',
    padding: 30,
    fontSize: 35,
    color: 'black',
    fontWeight: '500',
    backgroundColor: 'white',
    height: '100%',
  },
  image:{
    top: 20,
    marginTop: '7%',
    width: '100%',
    height: 80,
    resizeMode: 'contain',
  },
  button:{
    borderRadius: 30,
    top: '10%',
    width: '100%',
  },
  image_sms:{
    top: 30,
    resizeMode: 'contain',
    width: '50%',
    height: '27%',
    alignSelf: 'center',
  },
  privacy_police: {
    top: 40,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#5DB075',
  },
  login:{
    top: 45,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#5DB075',
  },
  enter_btn: {
    backgroundColor: '#5DB075',
    color: 'white',
    textAlign: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    top: '40%',
    padding: 16,
    fontSize: 20,
  },
  text_field_description: {
    fontWeight: '400',
    color: '#666666',
    paddingLeft: 5,
    paddingTop: 5,
  },
  text_field_description_sms: {
    fontWeight: '400',
    color: '#5DB075',
    paddingLeft: 5,
  },
  test_input: {
    borderWidth: 2,
    marginTop: '25%',
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    backgroundColor: '#E8E8E8',
    borderColor: '#d6d6d6',
  },
  header_title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 31,
    fontWeight: '500',
  },
  name_input:{
    borderWidth: 0.3,
    marginTop: '5%',
    borderRadius: 7,
    padding: 10,
    fontSize: 20,
    backgroundColor: 'white',
    borderColor: '#d6d6d6',
  },
  view_botton_logout:{
    position:'absolute',
     top: 40, 
     right: 25,
     width: 60, 
     height:30,
     display:'flex', 
     justifyContent:'center', 
     alignItems:'center'
  },
  button_loguot:{
    fontSize: 19, 
    color: 'white',
    fontWeight: '900'
  },

});