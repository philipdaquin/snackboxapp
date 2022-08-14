import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title}) => {
  
    
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
                    id={1}
                    avg_waiting={"10 - 15"} 
                    name={"Nando's"}
                    short_description={"Chicken, Sauce, Pork"}
                    avg_person={"2"} 
                    ratings={"5.0"}
                    total_reviews={"100"}
                    delivery_price={"Free Delivery"}
                    address={"Nandos UK"}
                    thumbnail={""}
                />                
                <RestaurantCard 
                    id={1}
                    avg_waiting={"10 - 15"} 
                    name={"Nando's"}
                    short_description={"Chicken, Sauce, Pork"}
                    avg_person={"2"} 
                    ratings={"5.0"}
                    total_reviews={"100"}
                    delivery_price={"Free Delivery"}
                    address={"Nandos UK"}
                    thumbnail={""}
                />                
                <RestaurantCard 
                    id={1}
                    avg_waiting={"10 - 15"} 
                    name={"Nando's"}
                    short_description={"Chicken, Sauce, Pork"}
                    avg_person={"2"} 
                    ratings={"5.0"}
                    total_reviews={"100"}
                    delivery_price={"Free Delivery"}
                    address={"Nandos UK"}
                    thumbnail={""}
                />                
                <RestaurantCard 
                    id={1}
                    avg_waiting={"10 - 15"} 
                    name={"Nando's"}
                    short_description={"Chicken, Sauce, Pork"}
                    avg_person={"2"} 
                    ratings={"5.0"}
                    total_reviews={"100"}
                    delivery_price={"Free Delivery"}
                    address={"Nandos UK"}
                    thumbnail={""}
                />                
                <RestaurantCard 
                    id={1}
                    avg_waiting={"10 - 15"} 
                    name={"Nando's"}
                    short_description={"Chicken, Sauce, Pork"}
                    avg_person={"2"} 
                    ratings={"5.0"}
                    total_reviews={"100"}
                    delivery_price={"Free Delivery"}
                    address={"Nandos UK"}
                    thumbnail={""}
                />                
                           
            </View>
        </ScrollView>
    </View>
  )
}

export default FeaturedRow