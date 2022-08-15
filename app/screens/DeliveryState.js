import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import * as Progress from 'react-native-progress';



const DeliveryState = () => {
  const navigation = useNavigation()
  useEffect(() => { 
    // After couple seconds switch to the next screen 
    setTimeout(() => { 
        navigation.navigate("OrderConfirmed")
    }, 5000)
  })
  return (
    <View className="bg-black/75 min-h-full">
      <TouchableOpacity className="min-h-[60%]" onPress={() => {navigation.navigate("Root")}} />

      <Animatable.View 
        animation="slideInUp"
        iterationCount={1}
        className="bg-white h-[278px] w-full absolute bottom-1 rounded-t-3xl px-4 pt-8">
        
        <View className="items-center">
          <View className="flex flex-row justify-center space-x-9 items-end">
              <Text className="text-5xl font-bold text-left">9:55am</Text>
              <Text className="text-base font-medium text-left text-gray-500">Estimated time of delivery</Text>
          </View>
          <Text className="text-lg font-medium text-left mt-8">Waiting for the restaurant to accept your request </Text>
        </View>
        <View className="h-[64px] rounded-3xl space-x-5
          bg-black items-center flex flex-row mt-8 justify-center">

          <Text className="font-medium text-2xl text-white text-center">Loading</Text>
          <Progress.Circle size={30} indeterminate={true} color="white" />

        </View>
    
      </Animatable.View>
    </View>
  )
}

export default DeliveryState