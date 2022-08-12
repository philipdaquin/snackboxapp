import { View, Text } from 'react-native'
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
        avg_person={"2"} 
        delivery={"Free Delivery"} 
        avg_waiting={"10 - 15"} 
        restaurant_name={"Mcdonald's"}/>
      <RecommendedCard 
        id={2} 
        name="Cheeseburger" 
        avg_person={"2"} 
        delivery={"Free Delivery"} 
        avg_waiting={"10 - 15"} 
        restaurant_name={"Mcdonald's"}/>
      <RecommendedCard 
        id={3} 
        name="Cheeseburger" 
        avg_person={"2"} 
        delivery={"Free Delivery"} 
        avg_waiting={"10 - 15"} 
        restaurant_name={"Mcdonald's"}/>
      <RecommendedCard 
        id={4} 
        name="Cheeseburger" 
        avg_person={"2"} 
        delivery={"Free Delivery"} 
        avg_waiting={"10 - 15"} 
        restaurant_name={"Mcdonald's"}/>
    </ScrollView>
  )
}

export default RecommendedFood