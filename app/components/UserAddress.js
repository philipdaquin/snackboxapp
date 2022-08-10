import { View, Text } from 'react-native'
import React from 'react'
import { LocationMarkerIcon} from 'react-native-heroicons/outline'

const UserAddress = () => {
  return (
    <View className="flex flex-row">
        <LocationMarkerIcon size={20}/>
        <View className="relative bottom-4 left-1">
          <Text className="">Delivery To</Text>
          <Text>Lorem Ipsum Street</Text>
        </View>
    </View>
  )
}

export default UserAddress