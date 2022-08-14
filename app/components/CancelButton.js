import { View, Text, TouchableOpacity, Touchable } from 'react-native'
import React from 'react'
import {XIcon} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'


const CancelButton = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity 
        onPress={() => {navigation.goBack()}}
        className="bg-[#d8d8d8] h-[43px] w-[46px]  rounded-lg items-center flex justify-center ">
      <XIcon size={24} />
    </TouchableOpacity>
  )
}

export default CancelButton