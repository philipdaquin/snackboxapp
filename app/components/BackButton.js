import { View, Text, TouchableOpacity, Touchable } from 'react-native'
import React from 'react'
import {ChevronLeftIcon} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'


const BackButton = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity 
        onPress={() => {navigation.goBack()}}
        className="bg-[#f3f3f3] h-[43px] w-[46px]  rounded-lg items-center flex justify-center ">
      <ChevronLeftIcon size={24} />
    </TouchableOpacity>
  )
}

export default BackButton