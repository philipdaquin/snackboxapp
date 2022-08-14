import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import UserAddress from '../components/UserAddress'
import CancelButton from '../components/CancelButton'
import CartItems from '../components/CartItems'
import { PlusCircleIcon } from 'react-native-heroicons/solid'
import { TicketIcon } from 'react-native-heroicons/outline'

const BasketScreen = () => {
  return (
    <>
    <ScrollView className="bg-white min-h-screen">
      <SafeAreaView className="pt-16 px-4 pb-[70px]">
        <View className="flex flex-row justify-center">
          <View className="absolute left-1">
            <CancelButton />
          </View>
          <View className="relative top-4">
            <UserAddress />
          </View>
        </View>
        <View className="mt-4">
          <Text className="text-left font-medium text-3xl">Cart Page</Text>
          <View className="border-y border-gray-300/80 my-4 rounded"/>
        </View>

        <View className="flex flex-row justify-between items-baseline">
          <Text className="text-left text-sm font-normal text-gray-500">3 Items in the Cart</Text>
          <Text className="text-red-500 text-right text-xs font-medium relative top-1">REMOVE ALL</Text>
        </View>

{/* Items in the cart  */}
        <View className="mt-5">
          <CartItems/>
          <View className="flex flex-row items-center justify-center space-x-1 mt-6">
            <PlusCircleIcon size={20} color={"#aeaeae"}/>
            <Text className="text-xs font-medium text-gray-400">Add More Items</Text>
          </View>
          <View className="border-y border-gray-300/80 my-4 rounded"/>
        </View>

{/* Promotion Code */}
        <View className="flex py-2 justify-between flex-row rounded-lg bg-[#f3f3f3] px-2">
          <View className="items-center flex flex-row space-x-1 relative left-1">
            <TicketIcon color="gray" size={25}/>
            <TextInput placeholder='Add Promo Code' className=" text-base font-medium"/>
          </View>
          <TouchableOpacity className="bg-black relative right-4
            items-center h-[39px] w-[70px] rounded-lg flex justify-center">
            <Text className="text-white font-medium text-sm">Apply</Text>
          </TouchableOpacity>
        </View>
{/* Subtotal, Discounts, Shipping Fee */}
        <View className="space-y-2">
          <View className="border-y border-gray-300/80 my-4 rounded"/>
            <View className="justify-between flex flex-row">
              <Text className="font-normal text-sm text-left text-gray-400">Subtotal</Text>
              <Text className="font-bold text-sm text-left text-gray-600">$49.00</Text>
            </View>
          <View>
            <View className="justify-between flex flex-row">
              <Text className="font-normal text-sm text-left text-gray-400">Subtotal</Text>
              <Text className="font-bold text-sm text-left text-gray-600">$49.00</Text>
            </View>
          </View>
          <View>
            <View className="justify-between flex flex-row">
              <Text className="font-normal text-sm text-left text-gray-400">Subtotal</Text>
              <Text className="font-bold text-sm text-left text-gray-600">$49.00</Text>
            </View>
          </View>
{/* Total */}
          <View>
            <View className="border-y border-gray-300/80 my-4 rounded"/>

              <View className="justify-between flex flex-row align-bottom">

                <View className="space-x-1 items-center flex flex-row ">
                  <Text className="font-medium text-2xl text-left">Total</Text>
                  <Text className="text-gray-400 text-xs font-medium">(incl. VAT)</Text>
                </View>

                <View className="items-center space-x-1 flex flex-row">
                  <Text className="text-gray-400 text-xs font-medium">(3 items)</Text>
                  <Text className="font-bold text-2xl text-left"> $56.00</Text>
                </View>

              </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>

{/* Continue Button */}
      <View className="absolute bottom-4  z-50 w-full px-4 ">
        <TouchableOpacity 
          className="p-5 rounded-2xl h-[64px]
            flex flex-row justify-center items-center bg-black mt-4">
          <View>
            <Text className="text-white font-medium text-2xl ">Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>

  )
}

export default BasketScreen