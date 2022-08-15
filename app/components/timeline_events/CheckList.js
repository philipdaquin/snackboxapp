import { View, Text } from 'react-native'
import React from 'react'
import { CheckIcon } from 'react-native-heroicons/outline'

const CheckList = ({time, title, description, ready}) => {
  return (
    <View className="mt-5">
        <View className="space-x-6 items-center flex flex-row">
            <Text className="text-base font-semibold text-gray-600 text-left">{time}</Text>
            <View className={`w-[34px] h-[33px] 
                rounded-md items-center justify-center 
                flex flex-row
                ${ready ? 'bg-[#55df8e]' : 'bg-[#959595]'} 
                `}>
                <CheckIcon width={20} height={20} color={"white"}/>

            </View>
            
            <View>
                <Text className="font-medium text-lg text-black">{title}</Text>
                <Text className="text-gray-500 text-sm font-normal w-[242px]">{description}</Text>
            </View>
            
        </View>
    </View>
  )
}

export default CheckList