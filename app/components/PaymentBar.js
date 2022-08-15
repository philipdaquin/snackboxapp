import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { select_basket_item, select_basket_total } from '../redux/basketSlice'
import { useNavigation } from '@react-navigation/native'
import {ShoppingBagIcon} from 'react-native-heroicons/outline'
import {ChevronRightIcon, CreditCardIcon} from 'react-native-heroicons/solid'
import Currency from 'react-currency-formatter'
import * as Animatable from 'react-native-animatable'


const PaymentBar = () => {
    const items = useSelector(select_basket_item)
    const navigation = useNavigation()
    const basket_total = useSelector(select_basket_total)


    if (items.length === 0) return null

  return (
    <Animatable.View 
      animation="slideInUp"
      iterationCount={1}
      className="bottom-3 absolute w-full z-50  px-4">
      <TouchableOpacity 
        onPress={() => {navigation.navigate("PreparingPage")}}
        className="px-4 text-lg font-medium flex 
        flex-row justify-between bg-black rounded-2xl h-[64px]
      ">
        <View className="space-x-2.5 flex 
        flex-row items-center">
          <Text className="text-white font-bold text-left text-lg">{items.length}</Text>

          <CreditCardIcon size={25} color={"white"}/>
          <Text className="text-white font-medium text-2xl">Payment</Text>
        </View>
        <View className="space-x-5 flex 
        flex-row items-center">

          <Text className="text-white font-bold text-left text-lg">
            <Currency quantity={-basket_total} currency="USD" />
          </Text>
          
          <View className="relative top-0">
            <ChevronRightIcon height={30} width={30} color={"white"} stroke={4}/>
          </View>
        </View>
      </TouchableOpacity>
    </Animatable.View>
  )
}

export default PaymentBar