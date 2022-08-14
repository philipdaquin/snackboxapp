import { View, Text, ScrollView, SafeAreaView, TextInput, TextInputBase, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import BackButton from '../components/BackButton'
import UserAddress from '../components/UserAddress'
import { TicketIcon } from 'react-native-heroicons/outline'
import { useSelector } from 'react-redux'
import { select_basket_item, select_basket_total } from '../redux/basketSlice'
import Subtotal from '../components/Subtotal'
import CancelButton from '../components/CancelButton'
import PaymentBar from '../components/PaymentBar'

const OrderSummary = () => {
  const items = useSelector(select_basket_item)
  const total_basket = useSelector(select_basket_total)

  return (
    <>
        <PaymentBar />

      <ScrollView className="bg-white min-h-white">
        <SafeAreaView className="pt-16 px-5 pb-[200px]">
          <View>
            <View className="flex flex-row justify-center">
              <View className="absolute left-1">
                  <CancelButton />
              </View>
              <View className="relative top-4">
                  <UserAddress />
              </View>
            </View>

            <View className="mt-5">
              <Text className="text-left font-medium text-3xl">Order Summary</Text>
              <View className="border-y border-gray-300/80 my-2 rounded"/>
            </View>

            <View className="flex flex-row space-x-6 items-center mt-3">
              <View className="p-12 bg-[#d9d9d9] rounded-lg"></View>
              <View className="space-y-1">
                <Text className="text-xl font-medium text-left">Restaurant Name</Text>
                <Text>Restaurant's Full Address</Text>
                <Text>Restaurant's Full Address</Text>
              </View>
            </View>
          </View>
  {/* You Order */}
          <Text className="text-left font-medium text-xl">Your Order</Text>
          <View className="border-y border-gray-300/80 my-2 rounded"/>
          <ScrollView>
            <View className="flex flex-row justify-between items-center mt-4">
              <View className="flex flex-row space-x-4 items-center">
                <Text className="text-left font-medium text-base">1x</Text>
                <View className="p-10 bg-[#d9d9d9] rounded-lg"></View>
                <View className="space-y-1">
                  <Text className="text-left font-medium text-base">Chicken Nuggets</Text>
                  <Text>Chicken & Sauces</Text>
                </View>
              </View>
              <Text className="text-lg font-medium text-left">
                $12.99
              </Text>
            </View>
            <View className="flex flex-row justify-between items-center mt-4">
              <View className="flex flex-row space-x-4 items-center">
                <Text className="text-left font-medium text-base">1x</Text>
                <View className="p-10 bg-[#d9d9d9] rounded-lg"></View>
                <View className="space-y-1">
                  <Text className="text-left font-medium text-base">Chicken Nuggets</Text>
                  <Text>Chicken & Sauces</Text>
                </View>
              </View>
              <Text className="text-lg font-medium text-left">
                $12.99
              </Text>
            </View>
            <View className="flex flex-row justify-between items-center mt-4">
              <View className="flex flex-row space-x-4 items-center">
                <Text className="text-left font-medium text-base">1x</Text>
                <View className="p-10 bg-[#d9d9d9] rounded-lg"></View>
                <View className="space-y-1">
                  <Text className="text-left font-medium text-base">Chicken Nuggets</Text>
                  <Text>Chicken & Sauces</Text>
                </View>
              </View>
              <Text className="text-lg font-medium text-left">
                $12.99
              </Text>
            </View>

            <Text className="text-left font-medium text-sm mt-3">Additional Requirements:</Text>
            <View className="flex py-2 justify-between flex-row rounded-lg bg-[#f3f3f3] px-2 mt-2">
              <View className="items-center flex flex-row space-x-1 relative left-1 ">
              <TextInput 
                  style={
                    {
                      outlineStyle: 'none'
                    }
                  }
                  underlineColorAndroid={'transparent'}
                  caretHidden={true}
                  textAlign='left'
                  textBreakStrategy='balanced'
                  multiline={true}
                  className=" h-[38px] w-[395px] flex flex-grow "
                  placeholder='Add Special Request Here!'/>
              </View>
          </View>
          <View className="border-y border-gray-300/80 my-4 rounded"/>
          </ScrollView>
          <View className="mt-3">
            <View>
              <Text className="font-medium text-lg text-left">Cost Summary</Text>
              <Subtotal
                subtotal={Math.floor(-total_basket)}
                discount={Math.floor(items[0]?.price/4)}
                shipping_fee={Math.floor(items[0]?.price/4)}
                total={Math.floor(-total_basket + 
                  (items[0]?.price/4) + 
                  (items[0]?.price/4))}
                items={items.length}
              />
            </View>
            <Text className="font-medium text-lg text-left mt-3">Payment Method</Text>
            <TouchableOpacity className="mt-4">
              <View className="rounded-xl bg-[#f3f3f3] h-[64px]">
                <View className="flex flex-row space-x-3 justify-between items-center px-5 py-3">
                    <View className="items-center flex flex-row space-x-3">
                      <Image source={{
                          uri: "https://cdn.freebiesupply.com/images/large/2x/apple-logo-transparent.png"
                      }}
                      className="h-[40px] w-[40px] mr-2"/>
                      <Text className="text-xl font-medium text-left">
                          Apple Pay
                      </Text>
                    </View>
                    <Text className="text-[#9b9b9b] text-sm font-medium">
                      Edit
                    </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View className="border-y border-gray-300/80 my-4 rounded"/>

            <Text className="font-medium text-xl text-left mt-3">Instructions to the Driver</Text>
            <View className="space-x-8 mt-4 flex flex-row justify-center">
              <TouchableOpacity className="rounded-lg flex justify-center items-center bg-[#d9d9d9] w-[186px] h-[40px]">
                <Text className="text-left font-medium text-lg ">Leave at the door</Text>
              </TouchableOpacity>
              <TouchableOpacity className="rounded-lg flex justify-center items-center bg-[#d9d9d9] w-[186px] h-[40px]">
                <Text className="text-left font-medium text-lg ">Meet the driver</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text className="text-left font-bold text-sm mt-11">Additional Requirements to the driver:</Text>
            <View className="flex py-4 h-[125px] justify-between flex-row rounded-xl bg-[#f3f3f3] px-2 mt-4">
              <View className="items-center flex flex-row space-x-1 relative  left-1 ">
                <TextInput 
                    style={
                      {
                        outlineStyle: 'none'
                      }
                    }
                    underlineColorAndroid={'transparent'}
                    caretHidden={true}
                    textAlign='left'
                    textBreakStrategy='balanced'
                    multiline={true}
                    className=" font-normal  h-[125px] w-[395px]"
                    placeholder='Add Special Request Here!'/>
              </View>
            </View>
        </SafeAreaView>
      </ScrollView>
    </>

  )
}

export default OrderSummary