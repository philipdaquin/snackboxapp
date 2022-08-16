import { View, Text, Image } from 'react-native'
import React from 'react'
import RecommendedCard from './RecommendedCard'
import {ScrollView} from 'react-native-web'



const RecommendedFood = () => {
  return (
    <ScrollView 
      contentContainerStyle={{
        paddingTop: 15
      }}
      horizontal 
      showsHorizontalScrollIndicator={false}
    >
      
     
      <RecommendedCard 
        id={1} 
        name="Cheeseburger" 
        description="Sample Description"
        avg_person={"2"} 
        delivery={"Free Delivery"} 
        avg_waiting={"10 - 15"} 
        restaurant_name={"Mcdonald's"}
        image={"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"}
        price={"4.49"}
      />
      <RecommendedCard 
        id={2} 
        name="Carbonara" 
        description="Sample Description"
        avg_person={"2"} 
        delivery={"Free Delivery"} 
        avg_waiting={"10 - 15"} 
        restaurant_name={"Ciccerello's"}
        image={"https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
        price={"4.49"}
      />
      <RecommendedCard 
        id={3} 
        name="Wonton" 
        description="Sample Description"
        avg_person={"2"} 
        delivery={"Free Delivery"} 
        avg_waiting={"10 - 15"} 
        restaurant_name={"Chatterjee's"}
        image={"https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=992&q=80"}
        price={"4.49"}
      />

      
    </ScrollView>
  )
}

export default RecommendedFood