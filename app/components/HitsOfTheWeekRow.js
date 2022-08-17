import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HitsOfTheWeek from './HitsOfTheWeek'


const HitsOfTheWeekRow = ({id}) => {
  return (
    <ScrollView 
        contentContainerStyle={{
            paddingTop: 10
        }}
        horizontal 
        showsHorizontalScrollIndicator={false}
        className="flex flex-row ">
      <HitsOfTheWeek img={"https://mcdonalds.com.au/sites/mcdonalds.com.au/files/content-module-images/HOME_BOOK_DESKTOP.jpg"}/>
      <HitsOfTheWeek img={"https://mcdonalds.com.au/sites/mcdonalds.com.au/files/content-module-images/HOME_PLAYLANDS_DESKTOP.jpg"}/>
      <HitsOfTheWeek img={"https://mcdonalds.com.au/sites/mcdonalds.com.au/files/content-module-images/McFavourites-Box_0.png"}/>
      <HitsOfTheWeek img={"https://images.unsplash.com/photo-1548340748-6d2b7d7da280?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bnVnZ2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}/>
    </ScrollView>
  )
}

export default HitsOfTheWeekRow