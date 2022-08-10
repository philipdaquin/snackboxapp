import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FeaturedRow from './FeaturedRow'

const FeatureProducts = () => {
  return (
   <View className="">
       <FeaturedRow id="" title="Best Restos Near You" />
       <FeaturedRow id="" title="Trending Fast Food" />
       <FeaturedRow id="" title="Available FoodTrucks" />
   </View>
  )
}

export default FeatureProducts