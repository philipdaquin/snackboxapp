import { View, Text, ScrollView, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import { AdjustmentsIcon, SearchIcon } from 'react-native-heroicons/outline'
import OrderCard from '../components/OrderCard'

const OrderScreen = () => {
  return (
    <ScrollView className="bg-white min-h-screen">
      <SafeAreaView className="pt-16 px-4 pb-20">
        <View className="">
          <Text className="font-medium text-left text-3xl">Your Order History</Text>
          
          {/* Input Search field */}
          <View className="flex-row items-center space-x-2 pb-7 pt-3">
              <View className="flex-row space-x-2 flex-1 bg-gray-200 px-3 py-1 items-center rounded-xl">
                  <SearchIcon color="gray" size={25}/>
                  <TextInput 
                      style={
                        {
                          outlineStyle: 'none'
                        }
                      }
                      placeholder="Search Restaurant's Menu" 
                      className="w-[100%] py-3 rounded-sm text-lg font-medium outline-none border-none "
                  />
                <AdjustmentsIcon size={24} color={"#777777"} />
              </View>
            </View>
          </View>
          <View className="border-y border-gray-300/80 rounded"/>
          
          <View className="mt-4">
            <OrderCard title={"Chicken Nuggets"} date={"16 Feb 2021"}/>
            <OrderCard title={"Chicken Nuggets"} date={"16 Feb 2021"}/>
            <OrderCard title={"Chicken Nuggets"} date={"16 Feb 2021"}/>
            <OrderCard title={"Chicken Nuggets"} date={"16 Feb 2021"}/>
          </View>

      </SafeAreaView>
       {/* Footer */}
      <View className=" flex flex-col-reverse justify-center items-center mt-32">
          <Text className="text-sm text-gray-400 font-medium">That's it!</Text>
      </View>
    </ScrollView>
  )
}

export default OrderScreen