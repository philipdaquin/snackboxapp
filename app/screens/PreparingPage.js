import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

const PreparingPage = () => {
    const navigation= useNavigation()
    useEffect(() => { 
        // After couple seconds switch to the next screen 
        setTimeout(() => { 
            navigation.navigate("DeliveryState")
        }, 4000)
      })
    
  return (
    <SafeAreaView
      className="bg-white justify-center flex-1 items-center"
    >
      <Animatable.Image 
        source={require("../assets/loader-2_food.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="p-10"
        />
    </SafeAreaView>
  )
}

export default PreparingPage