import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import RestaurantCard from './RestaurantCard'

const FeaturedRow2 = ({id, title}) => {
  
    
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
                    name={"Mcdonald's"}
                    short_description={"Chicken, Sauce, Pork"}
                    avg_person={"2"} 
                    ratings={"5.0"}
                    total_reviews={"100"}
                    delivery_price={"Free Delivery"}
                    address={"Nandos UK"}
                    thumbnail={"https://images.unsplash.com/photo-1631540223537-8f2d49a4ad9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"}
                    profile_pic={"https://cdn.mos.cms.futurecdn.net/xDGQ9dbLmMpeEqhiWayMRB.jpg"}

                />                
                <RestaurantCard 
                    id={2}
                    avg_waiting={"10 - 15"} 
                    name={"Nando's"}
                    short_description={"Chicken, Sauce, Pork"}
                    avg_person={"2"} 
                    ratings={"5.0"}
                    total_reviews={"100"}
                    delivery_price={"Free Delivery"}
                    address={"Nandos UK"}
                    thumbnail={"https://images.unsplash.com/photo-1633260682035-b6270ab1b314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80"}
                    profile_pic={"https://cdn.mos.cms.futurecdn.net/xDGQ9dbLmMpeEqhiWayMRB.jpg"}

                />                
            </View>
        </ScrollView>
    </View>
  )
}

export default FeaturedRow2