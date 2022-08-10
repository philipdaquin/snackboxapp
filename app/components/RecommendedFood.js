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
      <RecommendedCard />
      <RecommendedCard />
      <RecommendedCard />
      <RecommendedCard />
    </ScrollView>
  )
}

export default RecommendedFood