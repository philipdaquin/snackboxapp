import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import UserAddress from '../components/UserAddress'
import CancelButton from '../components/CancelButton'

const BasketScreen = () => {
  return (
    <ScrollView className="bg-white min-h-screen">
      <SafeAreaView className="pt-16 px-4  pb-[200px]">
        <View className="items-end space-">
          <CancelButton />
          <UserAddress />
        </View>

            <View>
                <Text>Hello</Text>
            </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default BasketScreen