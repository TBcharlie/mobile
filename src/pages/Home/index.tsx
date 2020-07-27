import React from 'react'

import { View, ImageBackground, Image, Text, StyleSheet, } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'


const Home = () => {
  const navigation = useNavigation()

function handleNavigateToPoints(){
  navigation.navigate('Points')
}

  return (
    <View style={style.container}>
      <View style={style.main}>
        <Image source={require('../../assets/logo.svg')} />
        <Text style={style.title}>Seu marketplace de coleta de resíduos</Text>
        <Text style={style.description}>Ajudamos pessoas a encotrarem pontos de coleta de forma eficiente</Text>
      </View>
      <View style={style.footer}>
        <RectButton style={style.button} onPress={handleNavigateToPoints} >
          <View style={style.buttonIcon}>
          <Text ><Icon name="arrow-right" color="#FFF" size={24}/></Text>
          </View>
          <Text style={style.buttonText}>Entrar</Text>
        </RectButton>

      </View>
    </View>)

}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,

  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: "#322153",
    fontSize: 32,
    fontFamily: "Ubuntu_700Bold",
    marginTop: 64
  },
  description: {
    color: '#6c6c80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: "Roboto_400Regular",
    maxWidth: 260,
    lineHeight: 24
  },
  footer: {},
  select: {},
  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center'
  },
  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },

})

export default Home