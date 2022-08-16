import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FeaturedRow from './FeaturedRow'
import FeaturedRow1 from './FeaturedRow1'
import FeaturedRow2 from './FeaturedRow2'

const FeatureProducts = () => {
  return (
   <View className="">
       <FeaturedRow id="1" title="Best Restos Near You" />
       <FeaturedRow1 id="2" title="Trending Fast Food" />
       <FeaturedRow2 id="3" title="Available FoodTrucks" />
   </View>
  )
}

export default FeatureProducts