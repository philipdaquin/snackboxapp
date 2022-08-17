import { View, Text } from 'react-native'
import React from 'react'

const Subtotal = ({
    subtotal, 
    discount, 
    shipping_fee,
    total, 
    items
}) => {
  return (
    <View>
      {/* Subtotal, Discounts, Shipping Fee */}
      <View className="space-y-2">
          <View className="border-y border-gray-300/80 my-4 rounded"/>
            <View className="justify-between flex flex-row">
              <Text className="font-normal text-sm text-left text-gray-400">Subtotal</Text>
              <Text className="font-bold text-sm text-left text-gray-600">{subtotal}</Text>
            </View>
          <View>
            <View className="justify-between flex flex-row">
              <Text className="font-normal text-sm text-left text-gray-400">Discounts</Text>
              <Text className="font-bold text-sm text-left text-gray-600">{discount}</Text>
            </View>
          </View>
          <View>
            <View className="justify-between flex flex-row">
              <Text className="font-normal text-sm text-left text-gray-400">Shipping Fee</Text>
              <Text className="font-bold text-sm text-left text-gray-600">{shipping_fee}</Text>
            </View>
          </View>
{/* Total */}
          <View>
            <View className="border-y border-gray-300/80 my-4 rounded"/>

              <View className="justify-between flex flex-row align-bottom">

                <View className="space-x-1 items-center flex flex-row ">
                  <Text className="font-semibold text-2xl text-left">Total</Text>
                  <Text className="text-gray-400 text-xs font-medium">(incl. VAT)</Text>
                </View>

                <View className="items-center space-x-1 flex flex-row">
                  <Text className="text-gray-400 text-xs font-medium">({items} items)</Text>
                  <Text className="font-bold text-2xl text-left"> ${total}
                  </Text>
                </View>
              </View>
          </View>
        </View>
    </View>
  )
}

export default Subtotal