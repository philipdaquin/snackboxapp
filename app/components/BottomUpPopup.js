import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, ChevronRightIcon, LocationMarkerIcon } from 'react-native-heroicons/outline'
import { useSelector } from 'react-redux'
import { select_basket_total } from '../redux/basketSlice'
import * as Animatable from 'react-native-animatable'

const BottomUpPopup = () => {
    const navigation = useNavigation()
    const total_basket = useSelector(select_basket_total)

    return (
        <View className="bg-black/75 min-h-full">
            <TouchableOpacity className="  min-h-[60%]" onPress={() => {navigation.goBack()}} />
            <Animatable.View 
                animation="slideInUp"
                iterationCount={1}
                className="bg-white h-[375px] w-full absolute bottom-1 rounded-t-3xl px-4 pt-8">
                <View className="flex flex-row justify-between">
                    <Text className="text-xl font-medium text-left">Delivery</Text>
                    <View className="flex flex-row">
                        <View className="items-center flex flex-row space-x-2">
                            <LocationMarkerIcon size={20}/>
                            <Text className="font-semibold text-base ml-1 underline-offset-1">
                                Lorem Ipsum Street 
                            </Text>
                            <Text className="">
                                <ChevronRightIcon size={20} strokeWidth={4} />
                            </Text>
                        </View>
                    </View>
                </View>
                <View className="border-y border-gray-300/80 my-4 rounded"/>
                <View className="">
                    <View className="flex flex-row justify-between">
                        <Text className="text-xl font-medium text-left">Estimated total cost</Text>
                        <Text className="text-xl font-medium text-left">~${Math.floor(-total_basket) + Math.floor((-total_basket)/16)}</Text>
                    </View>
                    <Text className="w-[328px] text-left text-sm text-gray-600">
                        Please note that for items sold by weight, the exact 
                        price may very depending on the weight of items  available
                    </Text>
                </View>
                <View className="border-y border-gray-300/80 my-4 rounded"/>
                <View className="flex flex-row justify-between items-center">
                    <View className="flex flex-row space-x-3 items-center">
                        <Image source={{
                            uri: "https://cdn.freebiesupply.com/images/large/2x/apple-logo-transparent.png"
                        }}
                        className="h-[40px] w-[40px] mr-2"/>
                        <Text className="text-xl font-medium text-left">
                            Apple Pay
                        </Text>
                    </View>
                    <Text className="">
                        <ChevronRightIcon size={20} strokeWidth={4} />
                    </Text>
                </View>
                <TouchableOpacity 
                    onPress={() => {
                        navigation.navigate("OrderSummary");
                    }}
                    className="bg-black items-center rounded-2xl p-5 mt-4">
                    <View className="items-center space-x-1 flex flex-row">
                        <Text className="text-white font-medium text-2xl ">Confirm Order</Text>
                    </View>
                </TouchableOpacity>
            </Animatable.View>
        </View>
        
  )
}

export default BottomUpPopup