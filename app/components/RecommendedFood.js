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
        description="Sample Description"
        avg_person={"2"} 
        delivery={"Free Delivery"} 
        avg_waiting={"10 - 15"} 
        restaurant_name={"Mcdonald's"}
        image={""}
        price={"4.49"}
      />
      <RecommendedCard 
        id={2} 
        name="Cheeseburger" 
        description="Sample Description"
        avg_person={"2"} 
        delivery={"Free Delivery"} 
        avg_waiting={"10 - 15"} 
        restaurant_name={"Mcdonald's"}
        image={""}
        price={"4.49"}
      />
      <RecommendedCard 
        id={3} 
        name="Cheeseburger" 
        description="Sample Description"
        avg_person={"2"} 
        delivery={"Free Delivery"} 
        avg_waiting={"10 - 15"} 
        restaurant_name={"Mcdonald's"}
        image={""}
        price={"4.49"}
      />
      <RecommendedCard 
        id={4} 
        name="Cheeseburger" 
        description="Sample Description"
        avg_person={"2"} 
        delivery={"Free Delivery"} 
        avg_waiting={"10 - 15"} 
        restaurant_name={"Mcdonald's"}
        image={""}
        price={"4.49"}
      />
      <RecommendedCard 
        id={5} 
        name="Cheeseburger" 
        description="Sample Description"
        avg_person={"2"} 
        delivery={"Free Delivery"} 
        avg_waiting={"10 - 15"} 
        restaurant_name={"Mcdonald's"}
        image={""}
        price={"4.49"}
      />
      
    </ScrollView>
  )
}

export default RecommendedFood