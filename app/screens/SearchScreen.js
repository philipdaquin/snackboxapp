import { View, Text, ScrollView, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import { AdjustmentsIcon, SearchIcon } from 'react-native-heroicons/outline'
import SuggestedResults from '../components/SuggestedResults'
import DiscoverCard from '../components/DiscoverCard'

const SearchScreen = () => {
  return (
    <ScrollView className="bg-white min-h-screen">
      <SafeAreaView className="pt-16 px-4">
        {/* Heading  Search*/}
        <View>
          <Text className="font-medium text-left text-3xl">Search</Text>
          {/* Input Search field */}
          <View className="flex-row items-center space-x-2 pb-2 pt-3">
              <View className="flex-row space-x-2 flex-1 bg-gray-200 px-3 py-1 items-center rounded-xl">
                  <SearchIcon color="gray" size={25}/>
                  <TextInput 
                      style={
                        {
                          outlineStyle: 'none'
                        }
                      }
                      placeholder="Search Restaurant's Menu" 
                      className="w-[100%] py-3  rounded-sm text-lg font-medium outline-none border-none "
                  />
                <AdjustmentsIcon size={24} color={"#777777"} />
              </View>
            </View>
          </View>

          <View className="mt-4">
            <Text className="font-bold text-xl text-left">Discover</Text>
            <View className="border-b border-gray-300/80 mt-2 rounded"/>

          </View>
          {/* Suggested/ Trending Search Results */}
          <View className="">
            <DiscoverCard title={"nuggets"}/>            
            <DiscoverCard title={"nuggets"}/>            
            <DiscoverCard title={"nuggets"}/>            
          </View>
          {/* Suggested Meals */}
          <View className="mt-14">
            <SuggestedResults />
          </View>
        </SafeAreaView>
    </ScrollView>
  )
}

export default SearchScreen