import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'


const CategoryCard = ({img, title}) => {
  return (

    <TouchableOpacity className="relative mr-5 ">
        <View className="w-[84px] h-[95px] bg-black/10 rounded-[10px] ">
            <Image source={{uri: img}} className="h-20 w-20 rounded-md"/>
            <Text className="absolute bottom-1 left-3 text-black/50 font-bold text-sm">{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default CategoryCard