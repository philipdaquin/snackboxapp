import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import {CheckIcon} from 'react-native-heroicons/solid'
import CheckList from '../../components/timeline_events/CheckList'


const DeliveryInProgress = () => {
  const navigation = useNavigation()
  useEffect(() => { 
    // After couple seconds switch to the next screen 
    setTimeout(() => { 
        navigation.navigate("CourierOnItsWay")
    }, 5000)
  })
  return (
    <View className="bg-black/75 min-h-full">
      <TouchableOpacity className="min-h-[60%]" onPress={() => {navigation.navigate("Root")}} />

      <View className="bg-white h-[318px] w-full absolute bottom-1 rounded-t-3xl px-4 pt-8">
        
        <View className="items-center">
            <View className="flex flex-row justify-center space-x-9 items-end">
                <Text className="text-5xl font-bold text-left">9:55am</Text>
                <Text className="text-base font-medium text-left text-gray-500">Estimated time of delivery</Text>
            </View>
        </View>
        <View className="flex flex-row items-end space-x-4">
            <Text className="text-lg font-medium text-gray-600 text-left mt-4">
                Live Timeline of Events
            </Text>
            <View className="bg-red-600 rounded-md flex flex-row justify-center h-[26px] w-[58px]">
                <Text className="items-center text-center text-white font-medium text-lg">LIVE</Text>
            </View>
        </View>
        <View className="border-y border-gray-300/80 my-2 rounded"/>
        
        {/* <Animatable.View
          animation="slideInUp"
          iterationCount={1}
        >
        </Animatable.View> */}
            <CheckList 
                time={"9:41am"}
                title={"Delivery in Progress"}
                description={"A courier has been assigned to your order"}
                ready={true}
            />
        {/* <Animatable.View
          animation="slideInUp"
          iterationCount={1}
          delay={4000}
        >
        </Animatable.View> */}
            <CheckList 
                time={"9:41am"}
                title={"Delivery in Progress"}
                description={"The courier is on their way to Restaurant's Name"}
                ready={false}
            />
            
    
      </View>
    </View>
  )
}

export default DeliveryInProgress