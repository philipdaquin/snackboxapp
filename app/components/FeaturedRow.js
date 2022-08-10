import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title}) => {
  
  const restaurant_list = []
  return (

    <View className="mb-9">
        <View className="border-y border-gray-300/80 rounded mb-4"/>

        <View className="justify-between items-end flex-row">
            <Text className="text-xl font-medium relative">{title}</Text>
            <Text className="text-sm font-medium text-red-400">Show All</Text>
        </View>
        
        <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="pt-4"
        >
            <View className="flex-row">
                <RestaurantCard 
                    avg_waiting={"10 - 15"}
                    name={"Restaurant Name"}
                    avg_person={"1"}
                    ratings={"5.0"}
                    total_reviews={100}

                    delivery_price={"Free Delivery"}
                />                
                <RestaurantCard 
                    avg_waiting={"10 - 15"}
                    name={"Restaurant Name"}
                    avg_person={"1"}
                    ratings={"5.0"}
                    total_reviews={100}

                    delivery_price={"Free Delivery"}
                />                
                <RestaurantCard 
                    avg_waiting={"10 - 15"}
                    name={"Restaurant Name"}
                    
                    avg_person={"1"}
                    ratings={"5.0"}
                    total_reviews={100}

                    delivery_price={"Free Delivery"}
                />                
                <RestaurantCard 
                    avg_waiting={"10 - 15"}
                    name={"Restaurant Name"}
                    avg_person={"1"}
                    ratings={"5.0"}
                    total_reviews={100}
                    delivery_price={"Free Delivery"}
                />                
                <RestaurantCard 
                    avg_waiting={"10 - 15"}
                    name={"Restaurant Name"}
                    avg_person={"1"}
                    ratings={"5.0"}
                    total_reviews={100}

                    delivery_price={"Free Delivery"}
                />                
                <RestaurantCard 
                    avg_waiting={"10 - 15"}
                    name={"Restaurant Name"}
                    avg_person={"1"}
                    ratings={"5.0"}
                    total_reviews={100}

                    delivery_price={"Free Delivery"}
                />                
            </View>
        </ScrollView>
    </View>
  )
}

export default FeaturedRow