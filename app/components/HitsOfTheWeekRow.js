import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HitsOfTheWeek from './HitsOfTheWeek'


const HitsOfTheWeekRow = () => {
  return (
    <ScrollView 
        contentContainerStyle={{
            paddingTop: 10
        }}
        horizontal 
        showsHorizontalScrollIndicator={false}
        className="flex flex-row ">
      <HitsOfTheWeek />
      <HitsOfTheWeek />
      <HitsOfTheWeek />
      <HitsOfTheWeek />
      <HitsOfTheWeek />
    </ScrollView>
  )
}

export default HitsOfTheWeekRow