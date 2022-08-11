import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import SuggestedCard from './SuggestedCard'
import DealProductInfo from './DealProductInfo'

const DealCard = () => {
  return (
    <TouchableOpacity className="mt-3 h-[371px] 
        w-[394] bg-white rounded-3xl 
        shadow-2xl drop-shadow
    ">
        <View className="w-[394] h-[272px] rounded-t-3xl bg-[#adadad]">
        </View>
        <DealProductInfo title={"Chicken Nuggets"} restaurant_name={"Pizza Hut"} price={4.22}/>
    </TouchableOpacity>
  )
}

export default DealCard