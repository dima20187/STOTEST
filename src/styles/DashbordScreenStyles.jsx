import { StyleSheet } from 'react-native';

export const dashbordStyles = StyleSheet.create({
  container: {
    paddingTop: '15%' ,
    textAlign: 'center',
    padding: 30,
    fontSize: 35,
    color: 'black',
    fontWeight: '500',
    backgroundColor: 'white',
    height: '100%',
  },
  image:{
    top: 7,
    width: 100,
    height: 100,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});