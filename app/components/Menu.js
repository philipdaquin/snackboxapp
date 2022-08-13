import { View, Text } from 'react-native'
import React from 'react'
import MenuCard from './MenuCard'

const Menu = () => {
  return (
    <View>
      <View className="flex flex-row justify-between items-end">
        <Text className="font-medium text-2xl text-left">Recommended For You</Text>
        <Text className="text-sm text-red-500 font-medium">Show All</Text>
      </View>
      
      <View className="mt-2">
        <MenuCard 
          id={1} 
          name="Sample Menu Item" 
          description="Sample Description"
          avg_person={"2"} 
          delivery={"Free Delivery"} 
          avg_waiting={"10 - 15"} 
          restaurant_name={"Mcdonald's"}
          image={""}
          price={"4.49"}
        />
        <MenuCard 
          id={1} 
          name="Sample Menu Item" 
          description="Sample Description"
          avg_person={"2"} 
          delivery={"Free Delivery"} 
          avg_waiting={"10 - 15"} 
          restaurant_name={"Mcdonald's"}
          image={""}
          price={"4.49"}
        />
        <MenuCard 
          id={1} 
          name="Sample Menu Item" 
          description="Sample Description"
          avg_person={"2"} 
          delivery={"Free Delivery"} 
          avg_waiting={"10 - 15"} 
          restaurant_name={"Mcdonald's"}
          image={""}
          price={"4.49"}
        />
      
      </View>
    </View>
  )
}

export default Menu