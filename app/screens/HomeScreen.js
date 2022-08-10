import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from '@react-navigation/native'
import UserAddress from '../components/UserAddress'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => { 
    navigation.setOptions({ 
      headerTitle: "This is the header",
      headerShown: false
    })
  })

  return (

    <SafeAreaView className="bg-white pt-5">
      {/* User Address bar */}
      <View className="">
        <UserAddress />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen