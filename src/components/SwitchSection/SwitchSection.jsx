import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


const MY_SALES = 'Мои скидки';
const MY_CARS = 'Мои авто';

export function SwitchSection({ selectedSection, SetSelectedSection, onClickHandlerDispatch }) {
  const onClickHandler = () => {
    SetSelectedSection(!selectedSection);
    onClickHandlerDispatch();
  };


  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.inner_wrapper}
      >
        <TouchableOpacity
          style={[styles.btn_wrapper, {
            backgroundColor: selectedSection ? '#FFFFFF' : '#F6F6F6',
            height: 45,
          }]}
          onPress={() => {
            if (selectedSection === true) return;
            onClickHandler();
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: selectedSection ? '#5DB075' : '#BDBDBD',
              fontWeight: selectedSection ? '600' : '500',
            }}
          >
            {MY_SALES}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn_wrapper, {
            backgroundColor: !selectedSection ? '#FFFFFF' : '#F6F6F6',
            height: 45,
          }]}
          onPress={() => {
            if (selectedSection !== true) return;
            onClickHandler();
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: !selectedSection ? '#5DB075' : '#BDBDBD',
              fontWeight: !selectedSection ? '600' : '500',
            }}
          >
            {MY_CARS}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 32,
    width: '100%',
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  inner_wrapper: {
    width: '100%',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  btn_wrapper: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
});
