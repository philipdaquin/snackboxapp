import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronRightIcon } from 'react-native-heroicons/outline' 
import { useNavigation } from '@react-navigation/native'


const AccountScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView className="bg-white min-h-screen">
      <SafeAreaView className="pt-16 px-4  pb-[200px]">
        
        {/* Header */}
        <View>
          <Text className="font-medium text-left text-3xl">Account</Text>
          <View className="border-y border-gray-300/80 my-4 rounded"/>
        </View>
        {/* User Details */}
        <TouchableOpacity className="flex flex-row items-center ">
          <View className="w-[93px] h-[91px] bg-[#d9d9d9] rounded-lg mr-5"></View>
          <View>
            <Text className="font-medium text-lg text-left">John Apple</Text>
            <Text className="text-sm font-normal text-left text-gray-400">+123 456 678</Text>
          </View>
          <View className="absolute right-1">
            <ChevronRightIcon height={16} width={10} strokeWidth={4} />
          </View>
        </TouchableOpacity>

        <View className="border-y border-gray-300/80 mt-4 pt-3 pb-4">
          <TouchableOpacity>
            <Text className="text-left text-xl font-medium">
              Payment Methods
            </Text>
          </TouchableOpacity>
        </View>
        {/* Css Note:  Border Bottom only  */}
        <View className="border-b border-gray-300/80 pt-3 pb-4">
          <TouchableOpacity>
            <Text className="text-left text-xl font-medium">
              Address
            </Text>
          </TouchableOpacity> 
        </View> 
       
        <View className="border-b border-gray-300/80 pt-3 pb-4">
          <TouchableOpacity>
            <Text className="text-left text-xl font-medium">
              My Voucher
            </Text>
          </TouchableOpacity>
        </View>

        <View className="border-b border-gray-300/80 pt-3 pb-4">
          <TouchableOpacity>
            <Text className="text-left text-xl font-medium">
              Notification
            </Text>
          </TouchableOpacity>
        </View>

        <View className="border-b border-gray-300/80 pt-3 pb-4">

          <TouchableOpacity>
            <Text className="text-left text-xl font-medium">
              Language
            </Text>
          </TouchableOpacity>
        </View>
       
        <View className="border-b border-gray-300/80 pt-3 pb-4">
          <TouchableOpacity>
            <Text className="text-left text-xl font-medium">
              Settings
            </Text>

          </TouchableOpacity>
        </View>
       
        <View className="border-b border-gray-300/80 pt-3 pb-4">
          <TouchableOpacity>
            <Text className="text-left text-xl font-medium">
              Invite Friends
            </Text>
          </TouchableOpacity>
        </View>
       
        <View className="border-b border-gray-300/80 pt-3 pb-4">
          <TouchableOpacity className="">
            <Text className="text-left text-xl font-medium">
              Support
            </Text>
          </TouchableOpacity>
        </View>


        <TouchableOpacity 
          onPress={() => {navigation.navigate("Signin")}}
          className="w-full py-2 rounded-md items-center bg-[#d9d9d9] mt-5 ">
          <Text className="text-xl font-medium">Log Out</Text>
        </TouchableOpacity>
       
      </SafeAreaView>
    </ScrollView>
  )
}

export default AccountScreen